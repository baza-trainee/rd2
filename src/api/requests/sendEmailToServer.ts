import { fetcher } from "api/fetcher";
import { isAxiosError } from "axios";

interface Email {
  email: string;
}

export const restorePassword = async (email: Email) => {
  try {
    const response = fetcher.post("/api/auth/forgot-password", email, {
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
