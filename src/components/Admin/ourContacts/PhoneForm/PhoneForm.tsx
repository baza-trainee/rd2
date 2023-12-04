import { Form, Formik, FormikHelpers } from "formik";

import { validationSchema } from "components/Admin/ourContacts/PhoneForm/validationSchema";
import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { NumberField } from "components/Admin/ourContacts/NumberField/NumberField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";

interface FormNumber {
  currentNumber: string;
  newNumber: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const PhoneForm = ({ handleOpenModal }: Props) => {
  const handleSubmit = (_: FormNumber, formikHelpers: FormikHelpers<FormNumber>) => {
    formikHelpers.resetForm();
    handleOpenModal();
  };

  return (
    <Formik
      initialValues={{ currentNumber: "+380667788999", newNumber: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form>
          <InputWrapper>
            <NumberField
              disabled
              labelText="Поточний номер телефону"
              name="currentNumber"
            />

            <NumberField labelText="Новий номер телефону" name="newNumber" />
          </InputWrapper>

          <SubmitButton isValid={isValid}>Змінити номер</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};
