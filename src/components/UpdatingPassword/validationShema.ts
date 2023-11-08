import { object, string, ref } from "yup";

export const validationShema = object({
  password: string(),
  passwordRepeat: string()
    .oneOf([ref("password")], "пароль має співпадать")
    .required("пароль має співпадать"),
});
