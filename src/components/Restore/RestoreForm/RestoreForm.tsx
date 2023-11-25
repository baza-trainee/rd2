import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";

import { FormEmail } from "types/formEmail";
import { FormContainer } from "components/Restore/FormContainer/FormContainer";
import { EmailField } from "components/Restore/EmailField/EmailField";
import { validationSchema } from "components/Restore/RestoreForm/validationShema";

interface Props {
  handleOpenModal: () => void;
}

export const RestoreForm = ({ handleOpenModal }: Props) => {
  const handleSubmit = (_: FormEmail, formikHelpers: FormikHelpers<FormEmail>) => {
    formikHelpers.resetForm();
    handleOpenModal();
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
            Надіслати
          </Button>
        </FormContainer>
      </Form>
    </Formik>
  );
};
