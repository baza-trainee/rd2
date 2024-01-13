/* eslint-disable max-len */
import { passwordValidation } from "constants/passwordValidation";

import { object, ref, string } from "yup";

const { isValidPassword, isSpaceInPassword } = passwordValidation;

export const validationSchema = object({
  password: string().required("введіть старий пароль"),
  new_password: string()
    .min(6, "мінімально шість знаків")
    .matches(
      isValidPassword,
      "пароль має місти тільки латинські літери, мати хоча б одну букву в верхньому регістрі та цифру",
    )
    .matches(isSpaceInPassword, "пароль не має містить пробiли")
    .required("введіть новий пароль"),

  confirm_password: string()
    .test("the same", "паролі мають співпадати", function (value) {
      const newPassword = this.resolve(ref("new_password"));
      return value === newPassword;
    })
    .required("підтвердіть новий пароль"),
});
