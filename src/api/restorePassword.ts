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
      console.log(error.message, error.response?.status);
    }

    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
