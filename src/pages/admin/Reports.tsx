import Typography from "@mui/material/Typography";

import { AdminReports } from "components/Admin/AdminReports/AdminReports";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const Reports = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Звітність
      </Typography>

      <AdminReports openModal={handleIsOpenModal} />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Файл успішно завантажено
      </ModalSuccess>
    </>
  );
};

export default Reports;
