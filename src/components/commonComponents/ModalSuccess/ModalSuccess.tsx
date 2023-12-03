import { Close } from "@mui/icons-material";
import { Box, Modal, Typography } from "@mui/material";

import { IconStyles, ModalStyles } from "./ModalSuccess.classes";

interface Props {
  children: string;
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

export const ModalSuccess = ({ children, isOpenModal, handleCloseModal }: Props) => {
  return (
    <Modal open={isOpenModal} onClose={handleCloseModal}>
      <Box sx={ModalStyles}>
        <Close sx={IconStyles} onClick={handleCloseModal} />

        <Typography>{children}</Typography>
      </Box>
    </Modal>
  );
};
