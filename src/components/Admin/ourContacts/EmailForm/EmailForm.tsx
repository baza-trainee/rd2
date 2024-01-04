import { Form, Formik, FormikHelpers } from "formik";
import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";

import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { EmailField } from "components/Admin/ourContacts/EmailField/EmailField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";
import { validationSchema } from "components/Admin/ourContacts/EmailForm/validationSchema";
import { loadData } from "api/loadData";
import { getCurrentEmail } from "api/getCurrentEmail";
import { EmailCredentials, setNewEmail } from "api/setNewEmail";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { queryClient } from "App";
import { ContactsSkeleton } from "components/Admin/ourContacts/ContactsSkeleton/ContactsSkeleton";

interface FormEmail {
  currentEmail: string;
  newEmail: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const EmailForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const { data, isLoading, isError } = useQuery({
    queryKey: "email",
    queryFn: loadData(getCurrentEmail),
  });

  const email = useMutation((credentials: EmailCredentials) => setNewEmail(credentials), {
    onSuccess: () => {
      handleOpenModal();

      queryClient.invalidateQueries("email");
    },
    onError: (error: AxiosError) => {
      if (error.response && error) {
        handleIsOpenModal();
      }
    },
  });

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
