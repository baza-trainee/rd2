import { queryClient } from "App";
import { EmailCredentials, setNewEmail } from "api/requests/setNewEmail";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

export const useSetEmail = (openSuccessModal: () => void, openErrorModal: () => void) =>
  useMutation((credentials: EmailCredentials) => setNewEmail(credentials), {
    onSuccess: () => {
      openSuccessModal();

      queryClient.invalidateQueries("email");
    },
    onError: (error: AxiosError) => {
      if (error.response && error) {
        openErrorModal();
      }
    },
  });
