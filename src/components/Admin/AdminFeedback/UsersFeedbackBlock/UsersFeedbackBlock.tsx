import { ChangeEvent, useState } from "react";

import {Box} from "@mui/material";

import Pagination from "@mui/material/Pagination";

import {UserFeedbackList} from "../UserFeedbackList/UserFeedbackList";

import {IUserFeedback} from "../../../../api/feedBackUsers";

import {getPageCount} from "../../../../helpers/admin/getPages";

type UsersFeedbackBlockProps = {
    userList: IUserFeedback[]
}

const UsersFeedbackBlock = ({userList}:UsersFeedbackBlockProps) => {

    const totalUsers = userList.length;
    const limit: number=6;
    const [page, setPage] = useState(1);
    //const [displayUser, setDisplayUser] = useState({start: 0, end: 0})
    const [displayUsers, setDisplayUsers] = useState({start: 0, end: limit})
    const totalPages = getPageCount(totalUsers, limit);

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        setPage(page);
        setDisplayUsers({
            start: (page-1)*limit,
            end: page*limit,
        });
    };

    return  (
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
    )
}

export {UsersFeedbackBlock}