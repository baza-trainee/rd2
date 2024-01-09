/* eslint-disable max-len */
import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";

import { FormEmail } from "types/formEmail";
import { FormContainer } from "components/Auth/ForgotPassword/FormContainer/FormContainer";
import { EmailField } from "components/Auth/ForgotPassword/EmailField/EmailField";
import { validationSchema } from "components/Auth/ForgotPassword/ForgotPasswordForm/validationShema";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useUpdatePassword } from "api/query-hooks/useUpdatePassword";

interface Props {
  handleOpenModalSuccess: () => void;
}

export const ForgotPasswordForm = ({ handleOpenModalSuccess }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();
  const mutation = useUpdatePassword(handleOpenModalSuccess, handleIsOpenModal);
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
