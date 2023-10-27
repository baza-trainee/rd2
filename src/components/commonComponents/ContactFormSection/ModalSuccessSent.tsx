import React from "react";
import { ModalProps } from "types/interfaceContactFormProps";

import iconCross from "../../../assets/icons/cross.svg";

import { Modal, CloseBtn, ModalText } from "./ContactFormSection.styled";

const ModalSuccessSent: React.FC<ModalProps> = ({setModal}) => {
  return <Modal>
    <CloseBtn onClick={()=> setModal(false)}><img src={iconCross} alt="close modal"/></CloseBtn>
    <ModalText>Повідомлення успішно відправлено</ModalText>
  </Modal>;
};
export default ModalSuccessSent;