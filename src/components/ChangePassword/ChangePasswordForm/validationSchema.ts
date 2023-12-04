import { object, ref, string } from "yup";

export const validationSchema = object({
  oldPassword: string().required("введіть старий пароль"),
  newPassword: string().required("введіть новий пароль"),
  newPasswordRepeat: string()
    .test("the same", "паролі мають співпадати", function (value) {
      const newPassword = this.resolve(ref("newPassword"));
      return value === newPassword;
    })
    .required("підтвердіть новий пароль"),
});
