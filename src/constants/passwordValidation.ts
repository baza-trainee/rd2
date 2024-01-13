/* eslint-disable max-len */
export const passwordValidation = {
  isValidPassword:
    /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/,
  isSpaceInPassword: /^\S*$/,
};
