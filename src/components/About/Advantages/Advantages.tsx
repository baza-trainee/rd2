import { useTranslation } from "react-i18next";

import { advantageList } from "components/About/Advantages/advantageList";
import { AdvantagesCard } from "components/About/Advantages/AdvantagesCard/AdvantagesCard";

import {
  Container,
  DescWrap,
  Divider,
  Desc,
  Title,
  AdvantageList,
  SectionWrapper,
} from "components/About/Advantages/Advantages.styled";

export const Advantages = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SectionWrapper>
        <DescWrap>
          <Title> {t("advantages_block.title")}</Title>

          <Divider></Divider>

          <Desc>{t("advantages_block.about")}</Desc>
        </DescWrap>

        <AdvantageList>
          {advantageList.map(({ id, img, titleKey, descKey }) => (
            <AdvantagesCard
              key={id}
              imgSrc={img}
              titleKey={titleKey}
              descriptionKey={descKey}
            />
          ))}
        </AdvantageList>
      </SectionWrapper>
    </Container>
  );
};
