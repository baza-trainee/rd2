import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { signIn } from "api/requests/signIn";
import { checkIsTokenValid } from "helpers/auth/checkIsTokenValid";
import { FormValues } from "types/formValues";
import { AccessTokenService } from "services/AccessTokenService";
import { ROUTES_ENUM } from "types/enums/routes.enum";

export const useAuthorization = (handleIsOpenModal?: () => void) => {
  const { getAccessToken } = new AccessTokenService();
  const navigate = useNavigate();

  return useMutation((credentials: FormValues) => signIn(credentials), {
    onSuccess: () => {
      const isAuthorizated = checkIsTokenValid(getAccessToken());

      if (isAuthorizated) {
        navigate(`/${ROUTES_ENUM.ADMIN}`);
      } else {
        throw new Error("invalid credentials");
      }
    },
    onError: () => {
      if (handleIsOpenModal) {
        handleIsOpenModal();
      }
    },
  });
};
