/* eslint-disable max-len */
import { object, string, ref } from "yup";

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const validationSchema = object({
  currentEmail: string(),
  newEmail: string()
    .email("введіть вірний email")
    .test("not-same", "email адреси не мають співпадати", function (value) {
      const currentEmail = this.resolve(ref("currentEmail"));

      return value !== currentEmail;
    })
    .matches(emailRegex, "введіть вірний email")
    .required("введіть email"),
});
