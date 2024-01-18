import { fetcher } from "api/fetcher";
import { isAxiosError } from "axios";

export interface EmailCredentials {
  email: string;
}

export const setNewEmail = async (credentials: EmailCredentials) => {
  try {
    const response = await fetcher.put("/api/contact/contacts/emails", credentials);

    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
