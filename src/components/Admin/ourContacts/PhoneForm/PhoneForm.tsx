import { Form, Formik, FormikHelpers } from "formik";

import { validationSchema } from "components/Admin/ourContacts/PhoneForm/validationSchema";
import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { NumberField } from "components/Admin/ourContacts/NumberField/NumberField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";

interface FormNumber {
  currentNumber: string;
  newNumber: string;
}

export const PhoneForm = () => {
  const handleSubmit = (_: FormNumber, formikHelpers: FormikHelpers<FormNumber>) => {
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ currentNumber: "", newNumber: "" }}
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

        <SubmitButton>Змінити номер</SubmitButton>
      </Form>
    </Formik>
  );
};
