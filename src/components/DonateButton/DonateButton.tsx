import React from "react";
import Button from "@mui/material/Button";

import {DonateModal} from "../DonateModal/DonateModal";



export const DonateButton = () => {

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
      >підтримати</Button>

      <DonateModal
        open={open}
        onCloseModal={onClose}
      />

    </>
  );
};