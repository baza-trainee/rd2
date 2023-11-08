import { AuthContainer } from "features/components/auth/AuthContainer/AuthContainer";
import { AuthTitle } from "features/components/auth/AuthTitle/AuthTitle";
import { Description } from "features/components/restore/Description/Description";
import { RestoreForm } from "features/components/restore/RestoreForm/RestoreForm";

export const Restore = (): JSX.Element => {
  return (
    <AuthContainer>
      <AuthTitle>Відновити пароль</AuthTitle>

      <Description>
        Для відновлення паролю введіть Вашу електронну адресу. Вам надійде лист із
        посиланням для зміни паролю
      </Description>

      <RestoreForm></RestoreForm>
    </AuthContainer>
  );
};
