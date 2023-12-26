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

interface FormEmail {
  currentEmail: string;
  newEmail: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const EmailForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const { data: email, isError } = useQuery({
    queryKey: "email",
    queryFn: loadData(getCurrentEmail),
  });

  const setEmail = useMutation(
    (credentials: EmailCredentials) => setNewEmail(credentials),
    {
      onSuccess: () => {
        handleOpenModal();

        queryClient.invalidateQueries("email");
      },
      onError: (error: AxiosError) => {
        if (error.response && error) {
          handleIsOpenModal();
        }
      },
    },
  );

  const currentEmail: string = isError ? "наш email" : email?.email;

  const handleSubmit = (
    credentials: FormEmail,
    formikHelpers: FormikHelpers<FormEmail>,
  ) => {
    const newEmail = {
      email: credentials.newEmail,
    };

    setEmail.mutate(newEmail);
    formikHelpers.resetForm();
  };

  const { isLoading } = setEmail;

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
