import { Typography } from "@mui/material";

import { Description } from "components/Restore/Description/Description";
import { RestoreForm } from "components/Restore/RestoreForm/RestoreForm";
import { MessageModal } from "components/Restore/MessageModal/MessageModal";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const Restore = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Відновити пароль
      </Typography>

      <Description>
        Для відновлення паролю введіть Вашу електронну адресу. Вам надійде лист із
        посиланням для зміни паролю
      </Description>

      <RestoreForm handleOpenModal={handleIsOpenModal} />

      <MessageModal isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Перейдіть за посиланням, відправленим у листі на Вашу пошту
      </MessageModal>
    </>
  );
};

export default Restore;
