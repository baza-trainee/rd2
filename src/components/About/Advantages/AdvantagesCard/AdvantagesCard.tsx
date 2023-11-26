import { useTranslation } from "react-i18next";

import {
  AdvantageCard,
  AdvantageImgBox,
  AdvantageImg,
  AdvantageDescBox,
  AdvantageTitle,
} from "components/About/Advantages/AdvantagesCard/AdvantagesCard.styled";

interface Props {
  imgSrc: string;
  titleKey: string;
  descriptionKey: string;
}

export const AdvantagesCard = ({ imgSrc, titleKey, descriptionKey }: Props) => {
  const { t } = useTranslation();

  return (
    <AdvantageCard>
      <AdvantageImgBox>
        <AdvantageImg src={imgSrc} alt={t(titleKey)} />
      </AdvantageImgBox>
      <AdvantageDescBox>
        <AdvantageTitle>{t(titleKey)}</AdvantageTitle>
        <p>{t(descriptionKey)}</p>
      </AdvantageDescBox>
    </AdvantageCard>
  );
};
