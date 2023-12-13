import React, {useState} from "react";

import Typography from "@mui/material/Typography";

import { TestQuery } from "components/TestQuery/TestQuery";

import {AdminReports} from "../../components/Admin/AdminReports/AdminReports";
import {ModalSuccess} from "../../components/commonComponents/ModalSuccess/ModalSuccess";

export const Reports = () => {

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
        Звітність
      </Typography>

      <AdminReports openModal={handleOpenModal}/>

      <ModalSuccess isOpenModal={open} handleCloseModal={handleCloseModal} >
        Файл успішно завантажено
      </ModalSuccess>

      {/*<TestQuery />*/}
    </>
  );
};

export default Reports;
