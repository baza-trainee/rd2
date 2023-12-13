import React, {useState} from "react";

import Typography from "@mui/material/Typography";

import { AdminPartnersLogo } from "components/Admin/AdminPartnersLogo/AdminPartnersLogo";

import {ModalSuccess} from "../../components/commonComponents/ModalSuccess/ModalSuccess";

export const Partners = () => {

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Лого партнерів
      </Typography>

      <AdminPartnersLogo openModal={handleOpenModal}/>

      <ModalSuccess isOpenModal={open} handleCloseModal={handleCloseModal} >
         Логотип успішно завантажено
      </ModalSuccess>
    </>
  );
};

export default Partners;
