import { isAxiosError } from "axios";

import { AccessTokenService } from "services/AccessTokenService";
import { RefreshTokenService } from "services/RefreshTokenService";
import { fetcher } from "api/fetcher";
import { Credentials } from "types/credentials";
import { Tokens } from "types/tokens";

const { setAccessToken } = new AccessTokenService();
const { setRefreshToken } = new RefreshTokenService();

export const signIn = async (credentials: Credentials): Promise<void> => {
  try {
    const response = await fetcher.post<Tokens>("/api/auth/login", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    setAccessToken(response.data.access_token);
    setRefreshToken(response.data.refresh_token);
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }

    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
