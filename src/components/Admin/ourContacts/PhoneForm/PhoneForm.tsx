import { Form, Formik, FormikHelpers } from "formik";

import { validationSchema } from "components/Admin/ourContacts/PhoneForm/validationSchema";
import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { NumberField } from "components/Admin/ourContacts/NumberField/NumberField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { ContactsSkeleton } from "components/Admin/ourContacts/ContactsSkeleton/ContactsSkeleton";
import { useGetCurrentPhone } from "api/query-hooks/useGetCurrentPhone";
import { useSetPhone } from "api/query-hooks/useSetPhone";

interface FormNumber {
  currentNumber: string;
  newNumber: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const PhoneForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();
  const phone = useSetPhone(handleOpenModal, handleIsOpenModal);
  const { data, isLoading, isError } = useGetCurrentPhone();

  const handleSubmit = (
    credentials: FormNumber,
    formikHelpers: FormikHelpers<FormNumber>,
  ) => {
    const newPhone = {
      phone: credentials.newNumber,
    };
    phone.mutate(newPhone);

    formikHelpers.resetForm();
  };

  if (!data || isLoading) {
    return <ContactsSkeleton />;
  }

  const { isLoading: isLoadingSendPhone } = phone;

  const currentPhoneNumber = isError ? "номер телефону" : data.phone;

  return (
    <Formik
      enableReinitialize
      initialValues={{ currentNumber: currentPhoneNumber, newNumber: "" }}
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
              number={currentPhoneNumber}
            />

            <NumberField labelText="Новий номер телефону" name="newNumber" />
          </InputWrapper>

          <SubmitButton isValid={isValid}>
            {(isLoadingSendPhone && <RequestFallback />) || "Змінити номер"}
          </SubmitButton>

          <ModalError isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
            Номер телефону не було змінено
          </ModalError>
        </Form>
      )}
    </Formik>
  );
};
