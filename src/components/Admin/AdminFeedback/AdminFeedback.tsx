import { useQuery } from "react-query";

import { fetchUsersList } from "../../../api/feedBackUsers";

import { PageContentWrapper } from "../PageContentWrapper/PageContentWrapper";

import { Fallback } from "../../commonComponents/Fallback/Fallback";

import { loadData } from "../../../api/loadData";

import { ErrorBlock } from "../../commonComponents/ErrorBlock/ErrorBlock";

import { LoadFeedbackListButton } from "./LoadFeedbackListButton/LoadFeedbackListButton";

import { FeedbackListWrapper } from "./AdminFeedback.styled";

import { UsersFeedbackBlock } from "./UsersFeedbackBlock/UsersFeedbackBlock";

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

        {!isError && Array.isArray(data) && <UsersFeedbackBlock userList={data} />}
      </FeedbackListWrapper>
    </PageContentWrapper>
  );
};

export { AdminFeedback };
