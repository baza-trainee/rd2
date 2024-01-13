/* eslint-disable max-len */
import { passwordValidation } from "constants/passwordValidation";

import { object, string, ref } from "yup";

const { isValidPassword, isSpaceInPassword } = passwordValidation;

export const validationSchema = object({
  password: string()
    .min(6, "мінімально шість знаків")
    .matches(
      isValidPassword,
      "пароль має місти тільки латинські літери без пробілів, мати хоча б одну букву в верхньому регістрі та цифру",
    )
    .matches(isSpaceInPassword, "пароль не має містить пробiли"),

  confirmPassword: string()
    .oneOf([ref("password")], "пароль має співпадать")
    .required("пароль має співпадать"),
});
