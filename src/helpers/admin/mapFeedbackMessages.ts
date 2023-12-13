import {Messages, UserMessage} from "../../types/typeFeedbackUserDetails";

export const mapFeedbackMessages = (messages:Messages[]):UserMessage[] => {
    return messages.map((mes) => {

        const newDate = new Date(mes.created_at);
        const mesDate: string =
            `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()}
                ${newDate.getHours()}:${newDate.getMinutes()}`;

           return {
               message: mes.msg,
               date: mesDate,
           }
    })
}