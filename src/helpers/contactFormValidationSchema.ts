import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(/^[-\sA-Za-zа-яА-ЯіІїЇґҐёЁєЄ]+$/, "Використовуйте тільки букви")
    .min(2, "Мінімум 2 символи")
    .max(50, "Максимум 50 символів")
    .required("Введіть ім'я"),
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      "Помилка валідації")
    .test("no-cyrillic", "Помилка валідації ", function (value) {
      if (value) {
        const domain = value.substring(value.lastIndexOf("@") + 1);
        const secondDomain = domain.split(".")[0];
        const latinRegex = /^[a-zA-Z]+$/;
        return latinRegex.test(secondDomain);
      }
      return true;
    })
    .max(50, "Максимум 50 символів")
    .required("Введіть e-mail адресу"),
  phone: yup
    .string()
    .required("Введіть телефон"),
  message: yup
    .string()
    .min(10, "Мінімум 10 символів")
    .max(300, "Максимум 300 символів")
    .required("Введіть повідомлення"),
});

export default contactSchema;

