import React from "react";

import {useTranslation} from "react-i18next";

import advantageList from "./advantageList";

import {
  Container, DescWrap, Divider, Desc, Title, AdvantageList, AdvantageDescBox,
  AdvantageCard, AdvantageImgBox, AdvantageImg, AdvantageTitle, SectionWrapper,
} from "./Advantages.styled";

const Advantages: React.FC = () => {

  const { t } = useTranslation();

  return <Container>
    <SectionWrapper>
      <DescWrap>

        <Title> {t("advantages_block.title")}</Title>

        <Divider></Divider>

        <Desc>{t("advantages_block.about")}</Desc>

      </DescWrap>

      <AdvantageList>
        {advantageList.map(({ id,img, titleKey, descKey}) =>{
          return <AdvantageCard key={id}>
            <AdvantageImgBox>
              <AdvantageImg src={img} alt={t(titleKey)} />
            </AdvantageImgBox>
            <AdvantageDescBox>
              <AdvantageTitle>{t(titleKey)}</AdvantageTitle>
              <p>{t(descKey)}</p>
            </AdvantageDescBox>
          </AdvantageCard>;
        })}
      </AdvantageList>

    </SectionWrapper>
        
  </Container>;
};
export default Advantages;