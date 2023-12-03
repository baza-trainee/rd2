/* eslint-disable max-len */
import { object, string, ref } from "yup";

const phoneRegExp = /^(\+?\d{1,3})?[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$/;

export const validationSchema = object({
  currentNumber: string(),
  newNumber: string()
    .matches(phoneRegExp, "не валідний номер")
    .min(10, "too short")
    .max(13, "too long")
    .test("not-same", "номери не мають співпадати", function (value) {
      const currentNumber = this.resolve(ref("currentNumber"));

      return value !== currentNumber;
    })
    .required("ytjfklsd"),
});
