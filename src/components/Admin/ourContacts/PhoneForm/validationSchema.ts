/* eslint-disable max-len */
import { object, string, ref } from "yup";

const phoneRegExp = /^(\+?\d{1,3})?[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$/;

export const validationSchema = object({
  currentNumber: string(),
  newNumber: string()
    .min(10, "номер має містити не менше 10 цифр")
    .max(13, "номер має містити не більше 12 цифр та знаку +")
    .matches(phoneRegExp, "не валідний номер")
    .test("not-same", "номери не мають співпадати", function (value) {
      const currentNumber = this.resolve(ref("currentNumber"));
      return value !== currentNumber;
    })
    .required("номери не мають співпадати"),
});
