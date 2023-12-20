import { fetcher } from "api/fetcher";

interface CurrentPhoneNumber {
  email: string;
}

export const getCurrentPhoneNumber = () =>
  fetcher.get<CurrentPhoneNumber>("/api/contact/contacts/phones");
