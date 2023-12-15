import CloseIcon from "@mui/icons-material/Close";

import { Box, IconButton, Modal, Typography } from "@mui/material";

import { IconButtonStyles, ModalStyles } from "./ModalError.classes";

interface Props {
  children: string;
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

export const ModalError = ({ children, isOpenModal, handleCloseModal }: Props) => {
  return (
    <Modal open={isOpenModal} onClose={handleCloseModal}>
      <Box sx={ModalStyles}>
        <IconButton sx={IconButtonStyles} aria-label="close" onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>

        <Typography>{children}</Typography>
      </Box>
    </Modal>
  );
};
