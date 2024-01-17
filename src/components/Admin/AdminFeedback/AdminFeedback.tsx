/* eslint-disable max-len */
import { useQuery } from "react-query";

import { fetchUsersList } from "api/requests/feedBackUsers";
import { Fallback } from "components/commonComponents/Fallback/Fallback";
import { loadData } from "api/requests/loadData";
import { ErrorBlock } from "components/commonComponents/ErrorBlock/ErrorBlock";
import { PageContentWrapper } from "components/Admin/PageContentWrapper/PageContentWrapper";
import { LoadFeedbackListButton } from "components/Admin/AdminFeedback/LoadFeedbackListButton/LoadFeedbackListButton";
import { UsersFeedbackBlock } from "components/Admin/AdminFeedback/UsersFeedbackBlock/UsersFeedbackBlock";

import { FeedbackListWrapper } from "components/Admin/AdminFeedback/AdminFeedback.styled";

const AdminFeedback = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: loadData(fetchUsersList),
  });

  if (isLoading) return <Fallback />;

  return (
    <PageContentWrapper>
      <FeedbackListWrapper>
        <LoadFeedbackListButton />

        {error instanceof Error && (
          <ErrorBlock blockType={true}>
            <p>{error.message}</p>
          </ErrorBlock>
        )}

        {!isError && data && <UsersFeedbackBlock userList={data} />}
      </FeedbackListWrapper>
    </PageContentWrapper>
  );
};

export { AdminFeedback };
