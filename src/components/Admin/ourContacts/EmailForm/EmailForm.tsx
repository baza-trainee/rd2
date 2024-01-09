import { Form, Formik, FormikHelpers } from "formik";

import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { EmailField } from "components/Admin/ourContacts/EmailField/EmailField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";
import { validationSchema } from "components/Admin/ourContacts/EmailForm/validationSchema";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { ContactsSkeleton } from "components/Admin/ourContacts/ContactsSkeleton/ContactsSkeleton";
import { useGetCurrentEmail } from "api/query-hooks/useGetCurrentEmail";
import { useSetEmail } from "api/query-hooks/useSetEmail";

interface FormEmail {
  currentEmail: string;
  newEmail: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const EmailForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();
  const { data, isError, isLoading } = useGetCurrentEmail();
  const email = useSetEmail(handleOpenModal, handleIsOpenModal);

  const handleSubmit = (
    credentials: FormEmail,
    formikHelpers: FormikHelpers<FormEmail>,
  ) => {
    const newEmail = {
      email: credentials.newEmail,
    };

    email.mutate(newEmail);
    formikHelpers.resetForm();
  };

  if (!data || isLoading) {
    return <ContactsSkeleton />;
  }

  const { isLoading: isLoadingSendEmail } = email;

  const currentEmail = isError ? "email" : data.email || "";

  return (
    <Formik
      enableReinitialize
      initialValues={{ currentEmail, newEmail: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form>
          <InputWrapper>
            <EmailField
              labelText="Поточний email"
              name="currentEmail"
              email={currentEmail}
              disabled
            />

            <EmailField labelText="Новий email" name="newEmail" />
          </InputWrapper>

          <SubmitButton isValid={isValid}>
            {(isLoadingSendEmail && <RequestFallback />) || "Змінити пошту"}
          </SubmitButton>

          <ModalError isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
            Пошта не була змінена
          </ModalError>
        </Form>
      )}
    </Formik>
  );
};
