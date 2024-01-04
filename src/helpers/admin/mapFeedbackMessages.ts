import {Messages, UserMessage} from "../../types/typeFeedbackUserDetails";

const showDate = (number: number) => {

  let fixNumber:string = number.toString();
  if (fixNumber.length < 2) fixNumber = "0" + fixNumber ;

  return fixNumber;
}

export const mapFeedbackMessages = (messages:Messages[]):UserMessage[] => {
  return messages.map((mes) => {

    const newDate = new Date(mes.created_at);

    const day = showDate( newDate.getDate() );
    const month = showDate(newDate.getMonth()+1);
    const year = showDate( newDate.getFullYear() );
    const hours = showDate( newDate.getHours() );
    const min = showDate ( newDate.getMinutes() );

    const mesDate: string = `${day}.${month}.${year} ${hours}:${min}`;

    return {
      message: mes.msg,
      date: mesDate,
    };
  });
};