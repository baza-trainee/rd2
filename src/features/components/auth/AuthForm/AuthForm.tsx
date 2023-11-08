import { ReactNode } from "react";

import { Form, Formik, FormikHelpers } from "formik";
import { FormValues } from "types/formValues";

import * as Yup from "yup";

interface Props {
  children: ReactNode;
  validationSchema: Yup.ObjectSchema<{}>;
  handleSubmit: (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => void;
}

export const AuthForm = ({ children, validationSchema, handleSubmit }: Props) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
};
