import { queryClient } from "App";
import { PhoneNumberCredentials, setNewPhoneNumber } from "api/setNewPhoneNumber";
import { AxiosError } from "axios";
import { useMutation } from "react-query";

export const useSetPhone = (openSuccessModal: () => void, openErrorModal: () => void) =>
  useMutation((credential: PhoneNumberCredentials) => setNewPhoneNumber(credential), {
    onSuccess: () => {
      openSuccessModal();
      queryClient.invalidateQueries("phone");
    },

    onError: (error: AxiosError) => {
      if (error.response || error) {
        openErrorModal();
      }
    },
  });
