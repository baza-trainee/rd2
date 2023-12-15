import Typography from "@mui/material/Typography";

import { AdminPartnersLogo } from "components/Admin/AdminPartnersLogo/AdminPartnersLogo";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const Partners = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Лого партнерів
      </Typography>

      <AdminPartnersLogo openModal={handleIsOpenModal} />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Логотип успішно завантажено
      </ModalSuccess>
    </>
  );
};

export default Partners;
