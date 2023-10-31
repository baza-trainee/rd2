import React from "react";
import Button from "@mui/material/Button";

import {DonateModal} from "../DonateModal/DonateModal";

interface DonateButtonProps {
    className?: string
}


export const DonateButton = ({className}: DonateButtonProps) => {

  const [open, setOpen] = React.useState(false);
  const onClickOpen = () => {
    setOpen(true);
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
        onCloseModal={onClose}
      />

    </>
  );
};