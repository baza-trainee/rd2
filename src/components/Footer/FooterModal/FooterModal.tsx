import { Dialog } from "@mui/material";
// import { Close } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { ModalContainer, ModalContent } from "./FooterModal.styled";

interface FooterModalProps {
  open: boolean;
  onCloseModal: () => void;
}

export function FooterModal(props: FooterModalProps) {
  const { onCloseModal, open } = props;

  return (
    <Dialog onClose={onCloseModal} open={open}>
      <ModalContainer>
        <IconButton
          aria-label="close"
          onClick={onCloseModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <ModalContent>{/* Modal content */}</ModalContent>
      </ModalContainer>
    </Dialog>
  );
}
