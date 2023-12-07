import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

import { theme } from "theme/theme";
import { IntroduceCard as CardIntroduce } from "components/About/Introduce/introduceList";

import {
  Card,
  Pictures,
  Text,
} from "components/About/Introduce/IntroduceCard/IntroduceCard.styled";

interface Props extends CardIntroduce {
  isEval: boolean;
}

export const IntroduceCard = ({
  isEval,
  desktopImage,
  desktopImage2,
  tabletImage,
  tabletImage2,
  mobileImage,
  mobileImage2,
}: Props) => {
  const { t } = useTranslation();

  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {(!isEval || !isAboveMd) && (
        <Card>
          <Pictures>
            <picture>
              <source srcSet={`${desktopImage} 1x, ${desktopImage2} 2x`} />
              <source srcSet={`${tabletImage} 1x, ${tabletImage2} 2x`} />
              <img src={mobileImage} srcSet={`${mobileImage2} 2x`} alt="dron" />
            </picture>
          </Pictures>
          <Text>{t("introduce_block.item_1_text")}</Text>
        </Card>
      )}

      {isAboveMd && isEval && (
        <Card>
          <Text>{t("introduce_block.item_2_text")}</Text>
          <Pictures>
            <picture>
              <source srcSet={`${desktopImage} 1x, ${desktopImage2} 2x`} />
              <source srcSet={`${tabletImage} 1x, ${tabletImage2} 2x`} />
              <img src={mobileImage} srcSet={`${mobileImage2} 2x`} alt="dron" />
            </picture>
          </Pictures>
        </Card>
      )}
    </>
  );
};
