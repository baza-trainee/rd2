import {UserFeedbackItem} from "../UserFeedbackItem/UserFeedbackItem";

import {IUserFeedback} from "../../../../api/feedBackUsers";

type UserFeedbackListProps = {
    userList: IUserFeedback[],
    startIndex: number,
    endIndex: number,
    total: number
}

const UserFeedbackList = (props: UserFeedbackListProps) => {

    const {userList, startIndex, endIndex, total} = props;
    const userListDisplay = () => {
        const users = [];
        const start = startIndex;
        const end = (endIndex < total) ? endIndex : total
        for (let i=start; i<end; i++) {
            const user =
                <UserFeedbackItem
                    key={userList[i].id}
                    name={userList[i].name}
                    surname={userList[i].surname}
                    id={userList[i].id}
                />
            users.push(user);
        }
        return users;
    }

    return <> { userListDisplay() } </>
}

export {UserFeedbackList}