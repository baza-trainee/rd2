import { string, object } from "yup";

const phoneRegExp = /^\d{1,12}$/;

export function CreateContactSchema(data: any) {
  const contactSchema = object().shape({
    name: string()
      .trim()
      .matches(/^[-\sA-Za-zа-яА-ЯіІїЇґҐёЁєЄ]+$/, data.onlyLetter)
      .min(2, data.inputMinLength)
      .max(50, data.inputMaxLength)
      .required(data.requiredName),

    surname: string()
      .trim()
      .matches(/^[-\sA-Za-zа-яА-ЯіІїЇґҐёЁєЄ]+$/, data.onlyLetter)
      .min(2, data.inputMinLength)
      .max(50, data.inputMaxLength)
      .required(data.requiredSurname),

    email: string()
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        data.validationError,
      )
      .test("no-cyrillic", data.validationError, function (value) {
        if (value) {
          const domain = value.substring(value.lastIndexOf("@") + 1);
          const secondDomain = domain.split(".")[0];
          const latinRegex = /^[a-zA-Z]+$/;
          return latinRegex.test(secondDomain);
        }
        return true;
      })
      .max(50, data.inputMaxLength)
      .required(data.requiredEmail),

    phone: string()
      .matches(phoneRegExp, data.validationError)
      .min(12, "Недостатньо символів")
      .max(12, "Максимум 12 символів")
      .required(data.requiredPhone),
    message: string()
      .min(10, data.messageMinLength)
      .max(300, data.messageMaxLength)
      .required(data.requiredField),
  });

  return contactSchema;
}
