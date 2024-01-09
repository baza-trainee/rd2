import { AxiosError } from "axios";
import { useMutation } from "react-query";

import { changePassword } from "api/changePassword";
import { PasswordCredentials } from "types/passwordCredentials";

export const useChangePassword = (
  openSuccessModal: () => void,
  openErrorModal: () => void,
) =>
  useMutation((credentials: PasswordCredentials) => changePassword(credentials), {
    onSuccess: () => {
      openSuccessModal();
    },
    onError: (error: AxiosError) => {
      if (error.status !== 200) {
        openErrorModal();
      }
    },
  });
