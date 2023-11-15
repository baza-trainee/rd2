import React, {useState} from "react";

import {useTranslation} from "react-i18next";

import {DonateModal} from "../../DonateModal/DonateModal";

import {ButtonStyled} from "./DonateButton.styled";

interface DonateButtonProps {
    className?: string
}


export const DonateButton = ({className}: DonateButtonProps) => {

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

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
      <ButtonStyled variant="contained"
        onClick={onClickOpen}
        className={className}
      >
          {t("buttons.donate")}
      </ButtonStyled>

      <DonateModal
        open={open}
        successPayment={successPayment}
        onCloseModal={onClose}
        onSuccess={onSuccess}
      />
    </>
  );
};