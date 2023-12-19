import { isAxiosError } from "axios";

import { fetcher } from "api/fetcher";
import { PasswordCredentials } from "types/passwordCredentials";

export const changePassword = async (credentials: PasswordCredentials) => {
  try {
    const response = await fetcher.put("/api/auth/change-password", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(`Axios error ${error.message}`);
      } else if (error.request) {
        throw new Error(`No response received from server: ${error.request}`);
      } else {
        throw new Error(`Axios error: ${error.message}`);
      }
    } else if (error instanceof Error) {
      throw new Error(`General error occurred: ${error.message}`);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
};
