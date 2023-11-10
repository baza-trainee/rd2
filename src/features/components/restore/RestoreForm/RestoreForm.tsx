import { ReactNode } from "react";

import { Form, Formik, FormikHelpers } from "formik";
import { ObjectSchema } from "yup";

import { FormEmail } from "types/formEmail";

interface Props {
  children: ReactNode;
  validationSchema: ObjectSchema<{}>;
  handleSubmit: (values: FormEmail, formikHelpers: FormikHelpers<FormEmail>) => void;
}

export const RestoreForm = ({ children, validationSchema, handleSubmit }: Props) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
};
