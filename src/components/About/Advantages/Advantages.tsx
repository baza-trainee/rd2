import React from "react";

// import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

import advantageList from "./advantageList";

import {
  Container, DescWrap, Divider, Desc, Title, AdvantageList, AdvantageDescBox,
  AdvantageCard, AdvantageImgBox, AdvantageImg, AdvantageTitle, SectionWrapper,
} from "./Advantages.styled";

const Advantages: React.FC = () => {

  const { t } = useTranslation();

  const advantageDescArr = t("advantages_block.items", { returnObjects: true });

  return <Container>
    <SectionWrapper>
      <DescWrap>
        {/* <Typography variant="h3" component="h3">
          Переваги проєкту
        </Typography> */}
        <Title>Переваги проєкту</Title>
        <Divider></Divider>
        <Desc>Територія може бути забруднена мінами, встановленими вручну, або розтяжками з
          вибуховими предметами. В такому випадку їх виявляють і знешкоджують вручну. Ми пропонуємо
          метод дистанційного розмінування без участі сапера і для будь-якого виду забруднення
        </Desc>
      </DescWrap>
      <AdvantageList>
        {advantageList.map(({ id, title, desc, img }, index) =>{
          return <AdvantageCard key={id}>
            <AdvantageImgBox>
              <AdvantageImg src={img} alt={title} />
            </AdvantageImgBox>
            <AdvantageDescBox>
              <AdvantageTitle>{title}{/*advantageDescArr[index].title*/}</AdvantageTitle>
              <p>{desc}</p>
            </AdvantageDescBox>
          </AdvantageCard>;
        })}
      </AdvantageList>
    </SectionWrapper>
        
  </Container>;
};
export default Advantages;