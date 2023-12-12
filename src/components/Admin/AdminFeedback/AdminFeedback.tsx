import { useQuery } from "react-query";

import {fetchUserList} from "../../../api/feedBackUsers";

import { PageContentWrapper } from "../PageContentWrapper/PageContentWrapper";

import {Fallback} from "../../commonComponents/Fallback/Fallback";

import {loadData} from "../../../api/loadData";

import { LoadFeedbackListButton } from "./LoadFeedbackListButton/LoadFeedbackListButton";

import {FeedbackListWrapper} from "./AdminFeedback.styled";

import {UsersFeedbackBlock} from "./UsersFeedbackBlock/UsersFeedbackBlock";

const AdminFeedback = () => {

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: loadData(fetchUserList),
  });

  if (isLoading) return <Fallback />

  return (
    <PageContentWrapper>

      <FeedbackListWrapper>

        <LoadFeedbackListButton />

        {(error instanceof Error) && isError && <p>Error: {error.message}</p>}

        {data && <UsersFeedbackBlock userList={data}/>}

      </FeedbackListWrapper>

    </PageContentWrapper>
  );
};

export { AdminFeedback };
