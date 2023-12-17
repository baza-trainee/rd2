import React, {useState} from "react";

import Typography from "@mui/material/Typography";

import { AdminPartnersLogo } from "components/Admin/AdminPartnersLogo/AdminPartnersLogo";

import {ModalSuccess} from "../../components/commonComponents/ModalSuccess/ModalSuccess";
import {useIsOpenModal} from "../../hooks/useIsOpenModal";
import {ModalError} from "../../components/commonComponents/ModalError/ModalError";

export const Partners = () => {

  const openSuccess = useIsOpenModal();

  const [openError, setOpenError] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleOpenModalError = (text:string) => {
    setModalText(text)
    setOpenError(true);
  };

  const handleCloseModalError = () => {
    setOpenError(false);
  };

  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Лого партнерів
      </Typography>

      <AdminPartnersLogo
          openModalError={handleOpenModalError}
          openModalSuccess={openSuccess.handleIsOpenModal}
      />

      <ModalError isOpenModal={openError} handleCloseModal={handleCloseModalError} >
           {modalText}
      </ModalError>

      <ModalSuccess isOpenModal={openSuccess.isOpenModal}
                    handleCloseModal={openSuccess.handleIsOpenModal}
      >
          "Логотип успішно завантажено"
      </ModalSuccess>
    </>
  );
};

export default Partners;
