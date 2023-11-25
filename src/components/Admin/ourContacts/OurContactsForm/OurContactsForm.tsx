import { Form, Formik, FormikHelpers } from "formik";

import { FormContacts } from "types/formContacts";
import { validationSchema } from "components/Admin/ourContacts/OurContactsForm/validationSchema";
import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { NumberField } from "components/Admin/ourContacts/NumberField/NumberField";
import { EmailField } from "components/Admin/ourContacts/EmailField/EmailField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";

export const OurContactsForm = () => {
  const handleSubmit = (_: FormContacts, formikHelpers: FormikHelpers<FormContacts>) => {
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ currentNumber: "", newNumber: "", currentEmail: "", newEmail: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputWrapper>
          <NumberField
            disabled
            labelText="Поточний номер телефону"
            name="currentNumber"
          />

          <NumberField labelText="Новий номер телефону" name="newNumber" />
        </InputWrapper>

        <InputWrapper>
          <EmailField labelText="Поточний email" name="currentEmail" disabled />

          <EmailField labelText="Новий email" name="newEmail" />
        </InputWrapper>

        <SubmitButton>Надіслати</SubmitButton>
      </Form>
    </Formik>
  );
};
