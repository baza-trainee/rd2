import { contactsList } from "components/commonComponents/ContactItem/contactsList";
import { Contacts } from "types/typeFooter";

const titleList: string[] = [
  "our_contacts.address_title",
  "our_contacts.phone_title",
  "our_contacts.email_title",
];
type contactsUsListProps = {
  title: string;
  info: Contacts;
};

export const contactsUsList: contactsUsListProps[] = [...contactsList]
  .reverse()
  .map((item, index) => ({ info: item, title: titleList[index] }));
