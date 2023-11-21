import {PageContentWrapper} from "../PageContentWrapper/PageContentWrapper";

import {UserFeedbackItem} from "./UserFeedbackItem/UserFeedbackItem";

const userList = [
    {name: "User Name1", surname: "User Surname1", date: "20.10.2023", id: "UserName1"},
    {name: "User Name2", surname: "User Surname2", date: "21.10.2023", id: "UserName2"},
    {name: "User Name3", surname: "User Surname3", date: "25.10.2023", id: "UserName3"},

]

const AdminFeedback = () => {
    return (
        <PageContentWrapper>

            {
                userList.map((user) => (
                    <UserFeedbackItem
                        key={user.id}
                        name={user.name}
                        surname={user.surname}
                        date={user.date}
                    />
                ))
            }

        </PageContentWrapper>
    )
}

export {AdminFeedback}