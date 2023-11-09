import {contactsList} from "../commonComponents/ContactItem/contactsList";
import {Contacts} from "../../types/typeFooter";

const titleList:string[] = [
  "Наше розташування",
  "Телефонуйте до нас",
  "Напишіть нам",
];
type contactsUsListProps = {
    title: string,
    info: Contacts
}

const contactsUsList:contactsUsListProps[] = [...contactsList].reverse().map( (item, index) => (
  {info: item, title: titleList[index]}
));

export {contactsUsList};