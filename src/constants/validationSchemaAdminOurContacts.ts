/* eslint-disable max-len */
import { object, string, ref } from "yup";

const phoneRegExp = /^(\+?\d{1,3})?[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$/;

export const validationSchemaAdminOurContacts = object({
  currentNumber: string(),
  newNumber: string()
    .matches(phoneRegExp, "номер має містити 10 цифр")
    .required("Number is required")
    .test("not-same", "номери не мають співпадати", function (value) {
      const currentNumber = this.resolve(ref("currentNumber"));

      return value !== currentNumber;
    })
    .required("номер має містити 10 цифр"),

  currentEmail: string(),
  newEmail: string()
    .email("введіть вірний email")
    .required("введіть вірний email")
    .test("not-same", "email адреси не мають співпадати", function (value) {
      const currentEmail = this.resolve(ref("currentEmail"));

      return value !== currentEmail;
    }),
});
