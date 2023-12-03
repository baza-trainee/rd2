import { Form, Formik, FormikHelpers } from "formik";

import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { EmailField } from "components/Admin/ourContacts/EmailField/EmailField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";
import { validationSchema } from "components/Admin/ourContacts/EmailForm/validationSchema";

interface FormEmail {
  currentEmail: string;
  newEmail: string;
}
export const EmailForm = () => {
  const handleSubmit = (_: FormEmail, formikHelpers: FormikHelpers<FormEmail>) => {
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ currentEmail: "", newEmail: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputWrapper>
          <EmailField labelText="Поточний email" name="currentEmail" disabled />

          <EmailField labelText="Новий email" name="newEmail" />
        </InputWrapper>

        <SubmitButton>Змінити пошту</SubmitButton>
      </Form>
    </Formik>
  );
};
