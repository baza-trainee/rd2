/* eslint-disable max-len */
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

import { Wrapper } from "components/commonComponents/DonateModal/SuccessContent/SuccessContent.styled";

export const SuccessContent = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Typography variant="h2" align="center">
        {/*t("donate_modal.success_title")*/}
          {t("donate_modal.not_working_title")}
      </Typography>
      <Typography variant="h3" align="center">
        {/*t("donate_modal.success_text")*/}
          {t("donate_modal.not_working_text")}
      </Typography>
    </Wrapper>
  );
};
