import { ChangeEvent, useState } from "react";

import Pagination from "@mui/material/Pagination";

import { Box } from "@mui/material";

import {getPageCount} from "../../../helpers/admin/getPages";

import { PageContentWrapper } from "../PageContentWrapper/PageContentWrapper";

import { LoadFeedbackListButton } from "./LoadFeedbackListButton/LoadFeedbackListButton";

import {userList} from "./userList";

import {UserFeedbackList} from "./UserFeedbackList/UserFeedbackList";
import {FeedbackListWrapper} from "./AdminFeedback.styled";

const AdminFeedback = () => {

  const totalUsers = userList.length;
  const limit: number=6;
  const [page, setPage] = useState(1);
  //const [displayUser, setDisplayUser] = useState({start: 0, end: 0})
  const [displayUsers, setDisplayUsers] = useState({start: 0, end: limit})
  //const [totalUsers, setTotalUsers] = useState(0);// will change after we will recieve userList

  //const [totalPages, setTotalPages] = useState(totalUsers/limit);

  const totalPages = getPageCount(totalUsers, limit);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    setDisplayUsers({
      start: (page-1)*limit,
      end: page*limit,
    });
  };

  return (
    <PageContentWrapper>

      <FeedbackListWrapper>

        <LoadFeedbackListButton />

        <UserFeedbackList
            startIndex={displayUsers.start}
            endIndex={displayUsers.end}
            total={totalUsers}
            userList={userList}
        />

          <Box display="flex" justifyContent="center" mt={3} alignItems="end" flexGrow={2}>
              <Pagination
                  count={totalPages}
                  shape="rounded"
                  color="primary"
                  defaultPage={page}
                  page={page}
                  onChange={handleChange}
              />
          </Box>

      </FeedbackListWrapper>

    </PageContentWrapper>
  );
};

export { AdminFeedback };
