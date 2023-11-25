import { ReactNode } from "react";

import { Form, Formik, FormikHelpers } from "formik";
import { ObjectSchema } from "yup";

import { FormContacts } from "types/formContacts";

interface Props {
  children: ReactNode;
  validationSchema: ObjectSchema<{}>;
  handleSubmit: (
    values: FormContacts,
    formikHelpers: FormikHelpers<FormContacts>,
  ) => void;
}

export const OurContactsForm = ({ children, validationSchema, handleSubmit }: Props) => {
  return (
    <Formik
      initialValues={{ currentNumber: "", newNumber: "", currentEmail: "", newEmail: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>{children}</Form>
    </Formik>
  );
};
