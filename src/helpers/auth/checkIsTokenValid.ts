import { checkIsTokenLive } from "helpers/auth/checkIsTokenLive";

export const checkIsTokenValid = (token: string | null): boolean => {
  if (token) {
    const isValid = checkIsTokenLive(token);

    return isValid;
  }

  return false;
};
