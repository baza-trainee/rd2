import { AuthContainer } from "features/components/auth/AuthContainer/AuthContainer";
import { AuthTitle } from "features/components/auth/AuthTitle/AuthTitle";

export const Restore = (): JSX.Element => {
  return (
    <AuthContainer>
      <AuthTitle>Відновити пароль</AuthTitle>
    </AuthContainer>
  );
};
