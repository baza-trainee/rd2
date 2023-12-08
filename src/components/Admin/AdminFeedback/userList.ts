export interface IUserFeedback  {
    name: string,
    surname: string,
    id: string
}

const value: IUserFeedback = { name: "Name", surname: "Surname", id: "User" }

export const userList:IUserFeedback[] = Array(50).fill(value);
