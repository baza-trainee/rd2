import { ReactNode } from "react";

import { Form, Formik, FormikHelpers } from "formik";

import * as Yup from "yup";

interface Props {
  children: ReactNode;
  validationSchema: Yup.ObjectSchema<{}>;
  handleSubmit: (
    values: { email: string },
    formikHelpers: FormikHelpers<{ email: string }>,
  ) => void;
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
