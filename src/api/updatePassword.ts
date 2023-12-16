import { isAxiosError } from "axios";

import { fetcher } from "api/fetcher";

export interface PasswordCredentials {
  new_password: string;
  confirm_password: string;
}

export const updatePassword = async (credentials: PasswordCredentials) => {
  try {
    const response = await fetcher.post("/api/auth/reset-password", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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
