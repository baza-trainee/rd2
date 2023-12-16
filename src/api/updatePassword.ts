import { isAxiosError } from "axios";

import { fetcher } from "api/fetcher";

interface PasswordCredentials {
  password: string;
  confirmPassword: string;
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
      console.log(error.message, error.response?.status);
    }

    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
