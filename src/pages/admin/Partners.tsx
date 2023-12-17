import React, {useState} from "react";

import Typography from "@mui/material/Typography";

import { AdminPartnersLogo } from "components/Admin/AdminPartnersLogo/AdminPartnersLogo";

import {ModalSuccess} from "../../components/commonComponents/ModalSuccess/ModalSuccess";

export const Partners = () => {

  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  //const [reset, setReset]

  const handleOpenModal = (text:string) => {
    setModalText(text)
    setOpen(true);
  };

  const handleCloseModal = () => {
    //func();
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Лого партнерів
      </Typography>

      <AdminPartnersLogo openModal={handleOpenModal}/>

      <ModalSuccess isOpenModal={open} handleCloseModal={handleCloseModal} >
          {modalText}
      </ModalSuccess>
    </>
  );
};

export default Partners;
