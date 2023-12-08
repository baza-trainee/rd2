import {UserFeedbackItem} from "../UserFeedbackItem/UserFeedbackItem";

import {IUserFeedback} from "../userList";

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
                    key={userList[i].id+i}
                    name={userList[i].name + i}
                    surname={userList[i].surname + i}
                    id={userList[i].id+i}
                />
            users.push(user);
        }
        return users;
    }

    return <> { userListDisplay() } </>
}

export {UserFeedbackList}