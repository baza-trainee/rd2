import React, {useState} from "react";

import {DialogStyled, ModalContent} from "./DonateModal.styled";

import {DonateContent} from "./DonateContent/DonateContent";
import {SuccessContent} from "./SuccessContent/SuccessContent";

interface DonateModalProps {
    open: boolean;
    onCloseModal: () => void;
}

export function DonateModal({ onCloseModal, open }: DonateModalProps) {
  //const { onCloseModal, open } = props;
    const [successPayment, setSuccessPayment] = useState(true)


  return (
    <DialogStyled
        fullWidth={true}
        onClose={onCloseModal}
        open={open}
    >

        <ModalContent>
            {successPayment ? <SuccessContent /> : <DonateContent />}
        </ModalContent>

    </DialogStyled>
  );
}