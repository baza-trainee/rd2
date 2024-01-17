/* eslint-disable max-len */
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { DonateContent } from "components/commonComponents/DonateModal/DonateContent/DonateContent";
import { SuccessContent } from "components/commonComponents/DonateModal/SuccessContent/SuccessContent";

import {
  DialogStyled,
  ModalContent,
} from "components/commonComponents/DonateModal/DonateModal.styled";

interface DonateModalProps {
  open: boolean;
  successPayment: boolean;
  onCloseModal: () => void;
  onSuccess: () => void;
}

export function DonateModal({
  onCloseModal,
  open,
  onSuccess,
  successPayment,
}: DonateModalProps) {
  return (
    <DialogStyled fullWidth={true} onClose={onCloseModal} open={open}>
      <IconButton aria-label="close" onClick={onCloseModal}>
        <CloseIcon />
      </IconButton>

      <ModalContent>
        {successPayment ? (
          <SuccessContent />
        ) : (
          <DonateContent onChangeSuccess={onSuccess} />
        )}
      </ModalContent>
    </DialogStyled>
  );
}
