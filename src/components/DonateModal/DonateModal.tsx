import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Dialog} from "@mui/material";

const ModalContent = () => {
  return (
    <div>
      <p>Dialog - обгортка для контента модалки.</p>
      <Typography variant="h3" component="h3" >
                h3. Heading
      </Typography>

      <p>bghjgj bjgkjgj bjbgjkhkj</p>

      <Button variant="contained"
        size="large"
        fullWidth={true}>
                Оплатити
      </Button>

    </div>
  );
};

interface DonateModalProps {
    open: boolean;
    onCloseModal: () => void;
}

export function DonateModal(props: DonateModalProps) {
  const { onCloseModal, open } = props;

  return (
    <Dialog onClose={onCloseModal} open={open}>

      <ModalContent />

    </Dialog>
  );
}