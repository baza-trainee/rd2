import { useState } from "react";

import { FormikHelpers } from "formik";

import { FormEmail } from "types/formEmail";
// import { AuthTitle } from "features/components/auth/AuthTitle/AuthTitle";
import { Description } from "features/restore/Description/Description";
import { RestoreForm } from "features/restore/RestoreForm/RestoreForm";
import { EmailField } from "features/restore/EmailField/EmailField";
// import { SubmitButton } from "features/components/auth/SubmitButton/SubmitButton";
import { FormContainer } from "features/restore/FormContainer/FormContainer";
import { MessageModal } from "features/restore/MessageModal/MessageModal";

import { validationEmailSchema } from "./validationEmailShema";

export const RestorePassword = (): JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleSubmitRestoreEmail = (
    values: FormEmail,
    formikHelpers: FormikHelpers<FormEmail>,
  ) => {
    formikHelpers.resetForm();
    handleOpenModal();
  };

  return (
    <>
      {/* <AuthTitle>Відновити пароль</AuthTitle> */}

      <Description>
        Для відновлення паролю введіть Вашу електронну адресу. Вам надійде лист із
        посиланням для зміни паролю
      </Description>

      <RestoreForm
        handleSubmit={handleSubmitRestoreEmail}
        validationSchema={validationEmailSchema}
      >
        <FormContainer>
          <EmailField />

          {/* <SubmitButton>Надіслати</SubmitButton> */}
        </FormContainer>
      </RestoreForm>

      <MessageModal isOpenModal={isOpenModal} handleCloseModal={handleOpenModal}>
        Перейдіть за посиланням, відправленим у листі на Вашу пошту
      </MessageModal>
    </>
  );
};
