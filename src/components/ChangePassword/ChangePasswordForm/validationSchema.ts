/* eslint-disable max-len */
import { object, ref, string } from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;

export const validationSchema = object({
  password: string().required("введіть старий пароль"),
  new_password: string()
    .matches(
      passwordRegex,
      "пароль має містити тільки латинські літери (мінімум 8 знаків), одну велику літеру, цифру та спецсимвол !@#$%^&*",
    )
    .required("введіть новий пароль"),
  confirm_password: string()
    .test("the same", "паролі мають співпадати", function (value) {
      const newPassword = this.resolve(ref("new_password"));
      return value === newPassword;
    })
    .required("підтвердіть новий пароль"),
});
