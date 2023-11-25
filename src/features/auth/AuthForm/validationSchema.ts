import { object, string } from "yup";

export const validationSchema = object({
  username: string().required("введіть вірний логін"),
  password: string().required("введіть вірний пароль"),
});
