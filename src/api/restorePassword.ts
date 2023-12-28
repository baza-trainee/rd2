import { isAxiosError } from "axios";

import { fetcher } from "api/fetcher";
import { PasswordCredentials } from "types/restorePasswordCredentials";
import { getResetTokenFromUrl } from "helpers/auth/getResetTokenFromUrl";

export const restorePassword = async (credentials: PasswordCredentials) => {
  try {
    const resetToken = getResetTokenFromUrl();

    const response = await fetcher.post("/api/auth/reset-password", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        reset_token: resetToken as string,
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
