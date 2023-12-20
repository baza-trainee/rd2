//import axios from "axios";

import {contactValuesType, ResponseUserDetails} from "../types/typeFeedbackUserDetails";

import { fetcher } from "./fetcher";

//const token= localStorage.getItem("access_token")
export interface IUserFeedback  {
    name: string,
    surname: string,
    id: string
}

 type GetUsersResponse = {
    data: IUserFeedback[];
};

export const sendFeedback = (user: contactValuesType ) => {
    const msgDate = new Date();
    return () => fetcher.post<ResponseUserDetails>("",
        {
            "obj_in": {
                "name": user.name,//"Ann",
                "surname": user.surname,//"Lethteria",
                "phone": user.phone,//"236852",
                "email": user.email,//"Ann@example.com"
            },
            "message": {
                "msg": user.message,//"ghjgjk bjjh jkjkkhjkmn mkhlkkmn mkh.l.km,n ",
                "created_at": msgDate,
            },
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
}
export const fetchUsersList = () => {
  return fetcher.get<GetUsersResponse>("/api/user/");
};

export const fetchUserFeedback = (id: string | undefined) => {
  return () => fetcher.get<ResponseUserDetails>(`/api/user/${id}`);
};

export const loadUsersListReport = () => {
    return fetcher.get("/api/user/download-repo", {
        responseType: "blob",
    });
}

const loadUsersListReport1 = () => {
    //if (token)
    /*return fetch(
        "http://ec2-16-16-66-169.eu-north-1.compute.amazonaws.com/api/user/download-report",
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": token,
            },
        },
    )*/

    //return axios.get(
        //"http://ec2-16-16-66-169.eu-north-1.compute.amazonaws.com/api/user/download-report",{
        //headers: {
            //Authorization: token,
        //},
    //})
}


