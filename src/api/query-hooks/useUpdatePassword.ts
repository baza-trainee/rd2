import { restorePassword } from "api/sendEmailToServer";
import { useMutation } from "react-query";
import { FormEmail } from "types/formEmail";

export const useUpdatePassword = (
  openSuccessModal: () => void,
  openErrorModal: () => void,
) =>
  useMutation((email: FormEmail) => restorePassword(email), {
    onSuccess: () => {
      openSuccessModal();
    },

    onError: () => {
      openErrorModal();
    },
  });
