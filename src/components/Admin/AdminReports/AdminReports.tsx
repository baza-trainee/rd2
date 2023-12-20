import React, {useState} from "react";

import {Grid, Typography} from "@mui/material";

import {PageContentWrapper} from "../PageContentWrapper/PageContentWrapper";

import {useIsOpenModal} from "../../../hooks/useIsOpenModal";

import {ModalError} from "../../commonComponents/ModalError/ModalError";

import {ModalSuccess} from "../../commonComponents/ModalSuccess/ModalSuccess";

import {reportsList} from "./reportsNameList";

import {LoadReportForm} from "./LoadReportForm/LoadReportForm";

const AdminReports = () => {

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
    <PageContentWrapper>

      <Grid container rowSpacing={6} columnSpacing={2}>

        {
            reportsList.map((reportItem, index) => (

            <Grid item xs={6} key={reportItem.reportName+index}>

              <Typography variant="h6">
                {reportItem.reportName}
              </Typography>

              <LoadReportForm
                id={`reportFile${index}`}
                loadFunc={reportItem.reportFunc}
                openModalError={handleOpenModalError}
                openModalSuccess={openSuccess.handleIsOpenModal}
              />
            </Grid>

          ))
        }

      </Grid>

        <ModalError isOpenModal={openError} handleCloseModal={handleCloseModalError} >
            {modalText}
        </ModalError>

        <ModalSuccess isOpenModal={openSuccess.isOpenModal}
                      handleCloseModal={openSuccess.handleIsOpenModal}
        >
            Файл успішно завантажено
        </ModalSuccess>

    </PageContentWrapper>
  );
};

export { AdminReports };