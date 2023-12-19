import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { FormEmail } from "types/formEmail";
import { FormContainer } from "components/Restore/FormContainer/FormContainer";
import { EmailField } from "components/Restore/EmailField/EmailField";
import { validationSchema } from "components/Restore/RestoreForm/validationShema";
import { restorePassword } from "api/sendEmailToServer";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalError } from "components/commonComponents/ModalError/ModalError";

interface Props {
  handleOpenModalSuccess: () => void;
}

export const RestoreForm = ({ handleOpenModalSuccess }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();
  const navigate = useNavigate();

  const mutation = useMutation((email: FormEmail) => restorePassword(email), {
    onSuccess: () => {
      handleOpenModalSuccess();

      setTimeout(() => {
        navigate("/admin/auth/new-password");
      }, 3e3);
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
