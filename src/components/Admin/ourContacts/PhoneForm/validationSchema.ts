/* eslint-disable max-len */
import { object, string, ref } from "yup";

const phoneRegExp = /^(\+?\d{1,3})?[ -]?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$/;

export const validationSchema = object({
  currentNumber: string(),
  newNumber: string()
    .matches(phoneRegExp, "номер має містити знак + та 12 цифр")
    .min(13, "номер має містити знак + та 12 цифр")
    .max(13, "номер має містити знак + та 12 цифр")
    .test("start from +", "номер має починатись зі знаку +", function (value) {
      return value?.slice(0, 1).includes("+");
    })
    .test("not-same", "номери не мають співпадати", function (value) {
      const currentNumber = this.resolve(ref("currentNumber"));
      return value !== currentNumber;
    })
    .required("введіть номер"),
});
