/* eslint-disable max-len */
import { object, string, ref } from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/;

export const validationSchema = object({
  password: string().matches(
    passwordRegex,
    "пароль має містити тільки латинські літери (мінімум 8 знаків), одну велику літеру, цифру та спецсимвол !@#$%^&*",
  ),

  passwordRepeat: string()
    .oneOf([ref("password")], "пароль має співпадать")
    .required("пароль має співпадать"),
});
