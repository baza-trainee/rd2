export const getResetTokenFromUrl = (): string | null => {
  const url = window.location.href;
  const queryString = url.split("?")[1];
  const params = new URLSearchParams(queryString);
  const resetToken = params.get("reset_token");

  return resetToken;
};
