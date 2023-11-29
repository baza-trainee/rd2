import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

import { theme } from "theme/theme";

import {
  ActivityImg,
  CardText,
  CardTextWrap,
  CardTitle,
  Cards,
} from "components/ScientificActivity/Card/Card.styled";

interface Props {
  isEven: boolean;
  titleKey: string;
  textKey: string;
  imageSrc: string;
  retinaImageSrc: string;
}

export const Card = ({
  isEven,
  titleKey,
  textKey,
  imageSrc,
  retinaImageSrc,
}: Props): JSX.Element => {
  const { t } = useTranslation();
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Cards>
      {!isEven && (
        <>
          <ActivityImg srcSet={`${retinaImageSrc} 2x`} src={imageSrc} alt={t(titleKey)} />
          <CardTextWrap>
            <CardTitle> {t(titleKey)} </CardTitle>
            <CardText> {t(textKey)} </CardText>
          </CardTextWrap>
        </>
      )}
      {isAboveMd && isEven && (
        <>
          <CardTextWrap>
            <CardTitle> {t(titleKey)} </CardTitle>
            <CardText> {t(textKey)} </CardText>
          </CardTextWrap>
          <ActivityImg srcSet={`${retinaImageSrc} 2x`} src={imageSrc} alt={t(titleKey)} />
        </>
      )}
    </Cards>
  );
};
