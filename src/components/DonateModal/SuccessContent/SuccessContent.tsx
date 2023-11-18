import Typography from "@mui/material/Typography";

import {useTranslation} from "react-i18next";

import {Wrapper} from "./SuccessContent.styled";

const SuccessContent = () => {

    const {t} = useTranslation();

  return (
    <Wrapper>
      <Typography variant="h2" align="center">
          { t("donate_modal.success_title") }
      </Typography>
      <Typography variant="h3" align="center">
          { t("donate_modal.success_text") }
      </Typography>
    </Wrapper>
  );
};

export {SuccessContent};