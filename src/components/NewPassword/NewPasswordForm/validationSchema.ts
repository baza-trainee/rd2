import { object, string, ref } from "yup";

export const validationSchema = object({
  password: string(),
  passwordRepeat: string()
    .oneOf([ref("password")], "пароль має співпадать")
    .required("пароль має співпадать"),
});
