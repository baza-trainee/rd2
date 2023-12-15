import { Typography } from "@mui/material";

import { Description } from "components/Restore/Description/Description";
import { RestoreForm } from "components/Restore/RestoreForm/RestoreForm";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";

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

      <RestoreForm handleOpenModalSuccess={handleIsOpenModal} />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Перейдіть за посиланням, відправленим у листі на Вашу пошту
      </ModalSuccess>
    </>
  );
};

export default Restore;
