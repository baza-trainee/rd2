import React, {useState} from "react";
import Button from "@mui/material/Button";

import {DonateModal} from "../../DonateModal/DonateModal";

interface DonateButtonProps {
    className?: string
}


export const DonateButton = ({className}: DonateButtonProps) => {

  const [open, setOpen] = React.useState(false);

  const [successPayment, setSuccessPayment] = useState(false);
  const onSuccess = () => {
    setSuccessPayment(true);
  };
  const onClickOpen = () => {
    setOpen(true);
    setSuccessPayment(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained"
        onClick={onClickOpen}
        className={className}
      >підтримати</Button>

      <DonateModal
        open={open}
        successPayment={successPayment}
        onCloseModal={onClose}
        onSuccess={onSuccess}
      />

    </>
  );
};