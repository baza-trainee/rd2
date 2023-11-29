import { useTranslation } from "react-i18next";

import {
  Divider,
  Title,
  TitleText,
  TitleWrap,
} from "components/ScientificActivity/HeaderBlock/HeaderBlock.styled";

export const HeaderBlock = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <TitleWrap>
      <Title>{t("activity_block.title")}</Title>
      <Divider />
      <TitleText>{t("activity_block.about")}</TitleText>
    </TitleWrap>
  );
};
