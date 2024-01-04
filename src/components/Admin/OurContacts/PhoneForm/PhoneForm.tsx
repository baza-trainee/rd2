import { Form, Formik, FormikHelpers } from "formik";
import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";

import { validationSchema } from "components/Admin/ourContacts/PhoneForm/validationSchema";
import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { NumberField } from "components/Admin/ourContacts/NumberField/NumberField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { ContactsSkeleton } from "components/Admin/ourContacts/ContactsSkeleton/ContactsSkeleton";
import { loadData } from "api/loadData";
import { getCurrentPhoneNumber } from "api/getCurrentPhoneNumber";
import { PhoneNumberCredentials, setNewPhoneNumber } from "api/setNewPhoneNumber";

interface FormNumber {
  currentNumber: string;
  newNumber: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const PhoneForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const phone = useMutation(
    (credential: PhoneNumberCredentials) => setNewPhoneNumber(credential),
    {
      onSuccess: () => {
        handleOpenModal();
      },
      onError: (error: AxiosError) => {
        if (error.response || error) {
          handleIsOpenModal();
        }
      },
    },
  );

  const { data, isError, isLoading } = useQuery({
    queryKey: "phone",
    queryFn: loadData(getCurrentPhoneNumber),
  });

  const handleSubmit = (
    credentials: FormNumber,
    formikHelpers: FormikHelpers<FormNumber>,
  ) => {
    phone.mutate({ phone: credentials.newNumber });
    formikHelpers.resetForm();
  };

  if (!data || isLoading) {
    return <ContactsSkeleton />;
  }

  const { isLoading: isLoadingSendPhone } = phone;

  const currentPhoneNumber = isError ? "номер телефону" : data?.phone;

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

          <SubmitButton isValid={isValid || isLoadingSendPhone}>
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
