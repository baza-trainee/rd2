import { object, string } from "yup";

export const validationSchema = object({
  email: string().required("введіть вірний логін"),
  password: string().required("введіть вірний пароль"),
});
