import { ReactNode } from "react";

import { Form, Formik, FormikHelpers } from "formik";
import { ObjectSchema } from "yup";

import { FormPasswords } from "types/formPasswords";

interface Props {
  children: ReactNode;
  validationSchema: ObjectSchema<{}>;
  handleSubmit: (
    values: FormPasswords,
    formikHelpers: FormikHelpers<FormPasswords>,
  ) => void;
}

export const NewPasswordForm = ({ children, validationSchema, handleSubmit }: Props) => {
  return (
    <Formik
      initialValues={{ password: "", passwordRepeat: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
};
