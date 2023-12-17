import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import drone from "assets/icons/404/404drone.svg";
import img404 from "assets/icons/404/404.svg";
import ellipse from "assets/icons/404/Ellipse.png";
import ellipse2 from "assets/icons/404/Ellipse2.png";

import {
  Drone,
  Numb,
  Picture,
  Text,
  Text2,
} from "components/Not-Found/NotFoundContent/NotFoundContent.styled";

export const NotFoundContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <Drone src={drone} alt="drone" />
      <Picture>
        <source srcSet={ellipse2} media="(min-width: 1440px)" />
        <source srcSet={ellipse2} media="(min-width: 768px)" />
        <img src={ellipse} alt="fone" />
      </Picture>

      <Numb src={img404} alt="404" />

      <Text>{t("page_404.item_text_1")}</Text>

      <Text2>{t("page_404.item_text_2")}</Text2>

      <Link to="/" style={{ color: "#f5f5f5" }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            lineHeight: "normal",
            fontSize: "18px",
          }}
        >
          {t("buttons.return_to_home_page")}
        </Button>
      </Link>
    </>
  );
};
