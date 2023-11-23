import {ChangeEvent, useState} from "react";

import Pagination from "@mui/material/Pagination";

import {Box} from "@mui/material";

import {PageContentWrapper} from "../PageContentWrapper/PageContentWrapper";

import {UserFeedbackItem} from "./UserFeedbackItem/UserFeedbackItem";
import {LoadFeedbackListButton} from "./LoadFeedbackListButton/LoadFeedbackListButton";

const userList = [
    {name: "User Name1", surname: "User Surname1", date: "20.10.2023", id: "UserName1"},
    {name: "User Name2", surname: "User Surname2", date: "21.10.2023", id: "UserName2"},
    {name: "User Name3", surname: "User Surname3", date: "25.10.2023", id: "UserName3"},

]

const AdminFeedback = () => {

    const [page, setPage] = useState(1);

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
        console.log(page);
    };

    return (
        <PageContentWrapper>

            <LoadFeedbackListButton />

            {
                userList.map((user) => (
                    <UserFeedbackItem
                        key={user.id}
                        name={user.name}
                        surname={user.surname}
                        id={user.id}
                    />
                ))
            }

            <Box display="flex"
                 justifyContent="center"
                 mt={3}
            >
                <Pagination count={10}
                            shape="rounded"
                            color="primary"
                            siblingCount={0}
                            defaultPage={1}
                            page={page} onChange={handleChange}
                />
            </Box>


        </PageContentWrapper>

    )
}

export {AdminFeedback}