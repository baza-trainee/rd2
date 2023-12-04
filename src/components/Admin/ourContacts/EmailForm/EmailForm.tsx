import { Form, Formik, FormikHelpers } from "formik";

import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { EmailField } from "components/Admin/ourContacts/EmailField/EmailField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";
import { validationSchema } from "components/Admin/ourContacts/EmailForm/validationSchema";

interface FormEmail {
  currentEmail: string;
  newEmail: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const EmailForm = ({ handleOpenModal }: Props) => {
  const handleSubmit = (_: FormEmail, formikHelpers: FormikHelpers<FormEmail>) => {
    handleOpenModal();
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ currentEmail: "foo@gmail.com", newEmail: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form>
          <InputWrapper>
            <EmailField labelText="Поточний email" name="currentEmail" disabled />

            <EmailField labelText="Новий email" name="newEmail" />
          </InputWrapper>

          <SubmitButton isValid={isValid}>Змінити пошту</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};
