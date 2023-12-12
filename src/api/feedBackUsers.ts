import axios from "axios";
//eslint-disable-next-line max-len
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDIzOTk3MDQsInN1YiI6IjEifQ.VlhMC3zTYeK9Llwhm60coHVphEqqrdXg4-T64H_pA68";

export interface IUserFeedback  {
    name: string,
    surname: string,
    id: string
}

export type GetUsersResponse = {
    data: IUserFeedback[];
};

export const fetchUserList = () => {
    return axios.get<GetUsersResponse>(
        "http://ec2-16-16-66-169.eu-north-1.compute.amazonaws.com/api/user/",
        {headers: {
                Authorization: token,
            }},
    )
}

//const value: IUserFeedback = { name: "Name", surname: "Surname", id: "User" }

//const userList:IUserFeedback[] = Array(50).fill(value);

