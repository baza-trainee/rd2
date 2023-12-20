import { Form, Formik, FormikHelpers } from "formik";
import { useQuery } from "react-query";

import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { EmailField } from "components/Admin/ourContacts/EmailField/EmailField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";
import { validationSchema } from "components/Admin/ourContacts/EmailForm/validationSchema";
import { loadData } from "api/loadData";
import { getCurrentEmail } from "api/getCurrentEmail";

interface FormEmail {
  currentEmail: string;
  newEmail: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const EmailForm = ({ handleOpenModal }: Props) => {
  const { data: email, isError } = useQuery({
    queryKey: "email",
    queryFn: loadData(getCurrentEmail),
  });

  const currentEmail: string = isError ? "наш email" : email;

  const handleSubmit = (_: FormEmail, formikHelpers: FormikHelpers<FormEmail>) => {
    handleOpenModal();
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ currentEmail, newEmail: "" }}
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
