import { AuthTitle } from "features/components/auth/AuthTitle/AuthTitle";
import { Description } from "features/components/restore/Description/Description";
import { RestoreForm } from "features/components/restore/RestoreForm/RestoreForm";
import { EmailField } from "features/components/restore/EmailField/EmailField";
import { SubmitButton } from "features/components/auth/SubmitButton/SubmitButton";
import { FormContainer } from "features/components/restore/FormContainer/FormContainer";

import { handleSubmitRestoreEmail } from "helpers/handleSubmitRestoreEmail";

import { validationEmailSchema } from "./validationEmailShema";

export const RestorePassword = (): JSX.Element => {
  return (
    <>
      <AuthTitle>Відновити пароль</AuthTitle>

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

          <SubmitButton>Надіслати</SubmitButton>
        </FormContainer>
      </RestoreForm>
    </>
  );
};
