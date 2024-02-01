import { fetcherPublic } from "api/fetcherPublic";

interface CurrentEmail {
  email: string;
}

export const getCurrentEmail = () =>
  fetcherPublic.get<CurrentEmail>("/api/contact/contacts/emails");
