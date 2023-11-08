import { object, string } from "yup";

export const validationEmailSchema = object({
  email: string().email("введіть вірний email").required("введіть вшрний email"),
});
