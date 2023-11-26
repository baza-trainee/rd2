import { useState } from "react";

import { Typography } from "@mui/material";

import { Description } from "components/Restore/Description/Description";
import { RestoreForm } from "components/Restore/RestoreForm/RestoreForm";
import { MessageModal } from "components/Restore/MessageModal/MessageModal";

export const Component = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Відновити пароль
      </Typography>

      <Description>
        Для відновлення паролю введіть Вашу електронну адресу. Вам надійде лист із
        посиланням для зміни паролю
      </Description>

      <RestoreForm handleOpenModal={handleOpenModal} />

      <MessageModal isOpenModal={isOpenModal} handleCloseModal={handleOpenModal}>
        Перейдіть за посиланням, відправленим у листі на Вашу пошту
      </MessageModal>
    </>
  );
};

Component.displayName = "Restore";
