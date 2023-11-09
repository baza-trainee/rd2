import React from "react";

import {Dialog, IconButton} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { Modal, ModalText } from "./ContactFormSection.styled";


interface ModalProps {
  open: boolean;
  onCloseModal: () => void;
}

const ModalSuccessSent: React.FC<ModalProps> = ({open, onCloseModal}) => {
  return (
      <Dialog
          onClose={onCloseModal}
          open={open}>
        <Modal>
          <IconButton
              aria-label="close"
              onClick={onCloseModal}
          >
            <CloseIcon />
          </IconButton>

          <ModalText>Повідомлення успішно відправлено</ModalText>
        </Modal>
      </Dialog>
  )
};
export default ModalSuccessSent;
