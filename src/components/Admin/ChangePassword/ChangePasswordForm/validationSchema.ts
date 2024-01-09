/* eslint-disable max-len */
import { object, ref, string } from "yup";

const passwordRegex =
  /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/;

export const validationSchema = object({
  password: string().required("введіть старий пароль"),
  new_password: string()
    .min(6, "мінімально шість знаків")
    .matches(
      passwordRegex,
      "пароль має місти тільки латинські літери, мати хоча б одну букву в верхньому регістрі та цифру",
    )
    .required("введіть новий пароль"),
  confirm_password: string()
    .test("the same", "паролі мають співпадати", function (value) {
      const newPassword = this.resolve(ref("new_password"));
      return value === newPassword;
    })
    .required("підтвердіть новий пароль"),
});
