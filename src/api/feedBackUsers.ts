//import axios from "axios";

import {ResponseUserDetails} from "../types/typeFeedbackUserDetails";

import {api} from "./instanceApi";

//const token= localStorage.getItem("access_token")
export interface IUserFeedback  {
    name: string,
    surname: string,
    id: string
}

export type GetUsersResponse = {
    data: IUserFeedback[];
};

export const fetchUsersList = () => {
    //console.log(token)
    /*return axios.get<GetUsersResponse>(
        "http://ec2-16-16-66-169.eu-north-1.compute.amazonaws.com/api/user/",
        {headers: {
                Authorization: token,
            }},
    )*/
    return api.get<GetUsersResponse>(
        "/api/user/",
    )
}

export const fetchUserFeedback = (id: string | undefined) => {
    return () => api.get<ResponseUserDetails>(
        `/api/user/${id}`,
    )
}


