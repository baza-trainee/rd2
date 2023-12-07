/* eslint-disable max-len */
import { object, ref, string } from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;

export const validationSchema = object({
  oldPassword: string().required("введіть старий пароль"),
  newPassword: string()
    .matches(
      passwordRegex,
      "пароль має містити тільки латинські літери, одну велику літеру, цифру та спецсимвол !@#$%^&*",
    )
    .required("введіть новий пароль"),
  newPasswordRepeat: string()
    .test("the same", "паролі мають співпадати", function (value) {
      const newPassword = this.resolve(ref("newPassword"));
      return value === newPassword;
    })
    .required("підтвердіть новий пароль"),
});
