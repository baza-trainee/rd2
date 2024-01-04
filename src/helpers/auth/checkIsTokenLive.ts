import { jwtDecode } from "jwt-decode";

export const checkIsTokenLive = (token: string): boolean => {
  const decodedToken = jwtDecode(token);
  const { exp } = decodedToken;
  if (exp) {
    const expTime = exp * 1000;
    const currentTime = new Date().getTime();

    if (expTime - currentTime <= 0) {
      return false;
    }
  }
  return true;
};
