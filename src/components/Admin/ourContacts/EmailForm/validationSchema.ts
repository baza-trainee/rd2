/* eslint-disable max-len */
import { object, string, ref } from "yup";

export const validationSchema = object({
  currentEmail: string(),
  newEmail: string()
    .email("введіть вірний email")
    .required("введіть email")
    .test("not-same", "email адреси не мають співпадати", function (value) {
      const currentEmail = this.resolve(ref("currentEmail"));

      return value !== currentEmail;
    }),
});
