import { fetcher } from "api/fetcher";

interface CurrentEmail {
  email: string;
}

export const getCurrentEmail = () =>
  fetcher.get<CurrentEmail>("/api/contact/contacts/emails");
