import { ChangeEvent, useState } from "react";

import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { IUserFeedback } from "api/requests/feedBackUsers";
import { getPageCount } from "helpers/admin/getPages";
import { UserFeedbackList } from "components/Admin/AdminFeedback/UserFeedbackList/UserFeedbackList";

type UsersFeedbackBlockProps = {
  userList: IUserFeedback[];
};

const UsersFeedbackBlock = ({ userList }: UsersFeedbackBlockProps) => {
  const totalUsers = userList.length;
  const limit: number = 8;
  const [page, setPage] = useState(1);

  const [displayUsers, setDisplayUsers] = useState({ start: 0, end: limit });
  const totalPages = getPageCount(totalUsers, limit);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    setPage(page);
    setDisplayUsers({
      start: (page - 1) * limit,
      end: page * limit,
    });
  };

  return (
    <>
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
    </>
  );
};

export { UsersFeedbackBlock };
