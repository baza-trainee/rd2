import { useTranslation } from "react-i18next";

import { advantageList } from "components/About/Advantages/advantageList";
import { AdvantagesList } from "components/About/Advantages/AdvantagesList/AdvantagesList";

import {
  Container,
  DescWrap,
  Divider,
  Desc,
  Title,
  SectionWrapper,
} from "components/About/Advantages/Advantages.styled";

export const Advantages = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SectionWrapper>
        <DescWrap>
          <Title> {t("advantages_block.title")}</Title>

          <Divider />

          <Desc>{t("advantages_block.about")}</Desc>
        </DescWrap>

        <AdvantagesList list={advantageList} />
      </SectionWrapper>
    </Container>
  );
};
