import { fetcher } from "api/fetcher";

export interface CurrentPhoneNumber {
  phone: string;
}

export const getCurrentPhoneNumber = () =>
  fetcher.get<CurrentPhoneNumber>("/api/contact/contacts/phones");
