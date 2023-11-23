import {FeedbackUserDetails} from "../types/typeFeedbackUserDetails";

const UserData:FeedbackUserDetails = {
    name: "Name",
    surname: "Surname",
    phone: "some phone",
    email: "email@gmail.com",
    messages: [
        {message: "some message 1 gfgb fhfgbv fxhfgcbnv fxfbhbfgvbn hgfgcbv", date: "21.10.2023"},
        {message: "some message 2", date: "08.11.2023"},
    ],
}
async function LoadData (id:string){

    const promise: Promise<FeedbackUserDetails> = new Promise((resolve) => {
        setTimeout(() =>
                resolve( UserData),
            1000)
    });
    const  response = await promise;

    //if (response.ok) return response.json;

    if (response) return response;
    else throw Error("loading user error");

}

export {LoadData}