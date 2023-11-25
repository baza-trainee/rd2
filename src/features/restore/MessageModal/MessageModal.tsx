import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Close from "@mui/icons-material/Close";

import { IconStyles, ModalStyles } from "./MessageModal.classes";

interface Props {
  children: string;
  isOpenModal: boolean;
  handleCloseModal: () => void;
}

export const MessageModal = ({
  children,
  isOpenModal,
  handleCloseModal,
}: Props): JSX.Element => {
  return (
    <div>
      <Modal open={isOpenModal} onClose={handleCloseModal}>
        <Box sx={ModalStyles}>
          <Close sx={IconStyles} onClick={handleCloseModal} />
          <Typography>{children}</Typography>
        </Box>
      </Modal>
    </div>
  );
};
