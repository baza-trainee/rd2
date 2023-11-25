import { object, string } from "yup";

export const validationSchema = object({
  email: string().email("введіть вірний email").required("введіть вшрний email"),
});
