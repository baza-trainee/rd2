import { fetcher } from "api/fetcher";
import { isAxiosError } from "axios";

export interface PhoneNumberCredentials {
  phone: string;
}

export const setNewPhoneNumber = async (credentials: PhoneNumberCredentials) => {
  try {
    const response = await fetcher.put("/api/contact/contacts/phones", credentials);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
