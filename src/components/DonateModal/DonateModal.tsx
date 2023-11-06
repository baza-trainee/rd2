import React from "react";

import {IconButton} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import {DialogStyled, ModalContent} from "./DonateModal.styled";

import {DonateContent} from "./DonateContent/DonateContent";

import {SuccessContent} from "./SuccessContent/SuccessContent";

interface DonateModalProps {
    open: boolean;
    successPayment: boolean
    onCloseModal: () => void;
    onSuccess: () => void;
}

export function DonateModal({ onCloseModal, open, onSuccess, successPayment }: DonateModalProps) {

  return (
    <DialogStyled
      fullWidth={true}
      onClose={onCloseModal}
      open={open}
    >
      <IconButton
        aria-label="close"
        onClick={onCloseModal}
      >
        <CloseIcon />
      </IconButton>

      <ModalContent>
        {successPayment
          ? <SuccessContent />
          : <DonateContent onChangeSuccess={onSuccess}/>
        }
      </ModalContent>

    </DialogStyled>
  );
}