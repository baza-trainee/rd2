import { ReactNode } from "react";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

interface Props {
  children: ReactNode;
  validationSchema: Yup.ObjectSchema<{}>;
  handleSubmit: (
    values: { password: string; passwordRepeat: string },
    formikHelpers: FormikHelpers<{ password: string; passwordRepeat: string }>,
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
