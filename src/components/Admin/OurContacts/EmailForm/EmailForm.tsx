import { Form, Formik, FormikHelpers } from "formik";
import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";

import { InputWrapper } from "components/Admin/OurContacts/InputWrapper/InputWrapper";
import { EmailField } from "components/Admin/OurContacts/EmailField/EmailField";
import { SubmitButton } from "components/Admin/OurContacts/SubmitButton/SubmitButton";
import { validationSchema } from "components/Admin/OurContacts/EmailForm/validationSchema";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { queryClient } from "App";
import { ContactsSkeleton } from "components/Admin/OurContacts/ContactsSkeleton/ContactsSkeleton";
import { EmailCredentials, setNewEmail } from "api/setNewEmail";
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
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const { data, isError, isLoading } = useQuery({
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
    email.mutate({ email: credentials.newEmail });
    formikHelpers.resetForm();
  };

  if (!data || isLoading) {
    return <ContactsSkeleton />;
  }

  const currentEmail = isError ? "email" : data.email || "";

  return (
    <Formik
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
            {(isLoading && <RequestFallback />) || "Змінити пошту"}
          </SubmitButton>

          <ModalError isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
            Пошта не була змінена
          </ModalError>
        </Form>
      )}
    </Formik>
  );
};
