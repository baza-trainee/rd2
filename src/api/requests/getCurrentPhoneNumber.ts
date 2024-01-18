import {fetcherPublic} from "api/fetcherPublic";

export interface CurrentPhoneNumber {
  phone: string;
}

export const getCurrentPhoneNumber = () =>
    fetcherPublic.get<CurrentPhoneNumber>("/api/contact/contacts/phones");
