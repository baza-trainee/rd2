/* eslint-disable max-len */
import { object, string, ref } from "yup";

const passwordRegex =
  /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/;

export const validationSchema = object({
  password: string()
    .min(6, "мінімально шість знаків")
    .matches(
      passwordRegex,
      "пароль має місти тільки латинські літери, мати хоча б одну букву в верхньому регістрі та цифру",
    ),

  confirmPassword: string()
    .oneOf([ref("password")], "пароль має співпадать")
    .required("пароль має співпадать"),
});
