import { Form, Formik, FormikHelpers } from "formik";
import { useMutation, useQuery } from "react-query";
import { AxiosError } from "axios";

import { validationSchema } from "components/Admin/ourContacts/PhoneForm/validationSchema";
import { InputWrapper } from "components/Admin/ourContacts/InputWrapper/InputWrapper";
import { NumberField } from "components/Admin/ourContacts/NumberField/NumberField";
import { SubmitButton } from "components/Admin/ourContacts/SubmitButton/SubmitButton";
import { getCurrentPhoneNumber } from "api/getCurrentPhoneNumber";
import { PhoneNumberCredentials, setNewPhoneNumber } from "api/setNewPhoneNumber";
import { loadData } from "api/loadData";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { queryClient } from "App";
import { ContactsSkeleton } from "components/Admin/ourContacts/ContactsSkeleton/ContactsSkeleton";

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
        queryClient.invalidateQueries("phone");
      },

      onError: (error: AxiosError) => {
        if (error.response || error) {
          handleIsOpenModal();
        }
      },
    },
  );

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

  const { data, isLoading, isError } = useQuery({
    queryKey: "phone",
    queryFn: loadData(getCurrentPhoneNumber),
  });

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
