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

interface FormNumber {
  currentNumber: string;
  newNumber: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const PhoneForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const { data: phoneNumber, isError: isErrorPhoneNumber } = useQuery({
    queryKey: "phone",
    queryFn: loadData(getCurrentPhoneNumber),
  });

  const setNumber = useMutation(
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

  const { isLoading } = setNumber;

  const handleSubmit = (
    credentials: FormNumber,
    formikHelpers: FormikHelpers<FormNumber>,
  ) => {
    const newPhone = {
      phone: credentials.newNumber,
    };
    setNumber.mutate(newPhone);

    formikHelpers.resetForm();
  };

  const currentPhoneNumber = isErrorPhoneNumber ? "наш телефон" : phoneNumber?.phone;

  return (
    <Formik
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
            {(isLoading && <RequestFallback />) || "Змінити номер"}
          </SubmitButton>

          <ModalError isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
            Номер телефону не було змінено
          </ModalError>
        </Form>
      )}
    </Formik>
  );
};
