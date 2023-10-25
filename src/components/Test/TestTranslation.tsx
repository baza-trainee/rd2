import { Box, Button, Typography } from "@mui/material";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

export const TestTranslation = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography>{t("hello")}</Typography>
      <Box>
        <Button variant="contained" onClick={() => changeLanguage("ua")}>
          Ua
        </Button>
        <Button variant="contained" onClick={() => changeLanguage("en")}>
          En
        </Button>
        <Button variant="contained" onClick={() => changeLanguage("gm")}>
          Gm
        </Button>
        <Button variant="contained" onClick={() => changeLanguage("fr")}>
          Fr
        </Button>
      </Box>
    </Box>
  );
};
