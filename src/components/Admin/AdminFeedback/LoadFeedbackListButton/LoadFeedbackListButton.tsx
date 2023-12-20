import React, {useState} from "react";

import Button from "@mui/material/Button";

import { Box } from "@mui/material";

import {useQuery} from "react-query";

import {loadData} from "../../../../api/loadData";

import {loadUsersListReport} from "../../../../api/feedBackUsers"

import {useIsOpenModal} from "../../../../hooks/useIsOpenModal";

import {ModalError} from "../../../commonComponents/ModalError/ModalError";

import {DownloadIconStyled} from "./LoadFeedbackListButton.styled";

export const LoadFeedbackListButton = () => {

    const {isOpenModal, handleIsOpenModal} = useIsOpenModal();
    const [modalText, setModalText] = useState("");

    const {isFetching, data, error, refetch} = useQuery({
        queryKey: ["usersReport"],
        queryFn: loadData(loadUsersListReport),
        enabled: false,
        onError: (error: Error) => {
            setModalText(error.message)
            handleIsOpenModal();
        },
    })
  const onClick = () => {
      refetch()
          .then(() => {
              let url: string;
              if (data)  {
                  const new_blob = new Blob(
                      [data],
              {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,"})
                  url = window.URL.createObjectURL(new_blob);
                  const a:HTMLAnchorElement = document.createElement("a");
                  a.href = url;
                  a.download = "report";
                  a.click();
              }
          });
  };

  return (
    <>
    <Box display="flex" justifyContent="end" mb={3}>
      <Button
        sx={{textTransform: "inherit"}}
        variant="contained"
        size="small"
        endIcon={<DownloadIconStyled className={isFetching ? "flashing" : ""}/>}
        onClick={onClick}
      >
        Завантажити excel файл з переліком звернень
      </Button>
    </Box>

    {//!isFetching && isError//error instanceof Error
      // && handleIsOpenModal()//`${error.message}`
    }

        <ModalError isOpenModal={isOpenModal}
                      handleCloseModal={handleIsOpenModal}
        >
            {modalText}
        </ModalError>
    </>
  );
};
