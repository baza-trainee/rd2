import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { useMutation } from "react-query";

import { FormEmail } from "types/formEmail";
import { FormContainer } from "components/ForgotPassword/FormContainer/FormContainer";
import { EmailField } from "components/ForgotPassword/EmailField/EmailField";
import { validationSchema } from "components/ForgotPassword/ForgotPasswordForm/validationShema";
import { restorePassword } from "api/sendEmailToServer";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalError } from "components/commonComponents/ModalError/ModalError";

interface Props {
  handleOpenModalSuccess: () => void;
}

export const ForgotPasswordForm = ({ handleOpenModalSuccess }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const mutation = useMutation((email: FormEmail) => restorePassword(email), {
    onSuccess: () => {
      handleOpenModalSuccess();
    },

    onError: () => {
      handleIsOpenModal();
    },
  });

  const { isLoading } = mutation;

  const handleSubmit = (email: FormEmail, formikHelpers: FormikHelpers<FormEmail>) => {
    mutation.mutate(email);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormContainer>
          <EmailField />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            {(isLoading && <RequestFallback />) || "Надіслати"}
          </Button>

          <ModalError isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
            Повідомлення не відправлено
          </ModalError>
        </FormContainer>
      </Form>
    </Formik>
  );
};
