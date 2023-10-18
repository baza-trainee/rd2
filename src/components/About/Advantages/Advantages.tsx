import React from "react";

import advantageList from "./advantageList";
import {
  Container, DescWrap, Divider, Desc, Title, AdvantageList,
  AdvantageItem, AdvantageImgBox, AdvantageImg, AdvantageTitle, AdvantageDesc,
} from "./Advantages.styled";

const Advantages: React.FC = () => {
  return <Container>
    <DescWrap>
      <Title>Переваги проєкту</Title>
      <Divider></Divider>
      <Desc>Територія може бути забруднена мінами, встановленими вручну, або розтяжками з
        вибуховими предметами.В такому випадку їх виявляють і знешкоджують вручну. Ми пропонуємо
        метод дистанційного розмінування без участі сапера і для будь-якого виду забруднення</Desc>
    </DescWrap>
    <AdvantageList>
      {advantageList.map(({ id, title, desc, img }) =>{
        return <AdvantageItem key={id}>
          <AdvantageImgBox>
            <AdvantageImg src={img} alt={title} />
          </AdvantageImgBox>
          <AdvantageTitle>{title}</AdvantageTitle>
          <AdvantageDesc>{desc}</AdvantageDesc>
        </AdvantageItem>;
      })}
    </AdvantageList>
        
  </Container>;
};
export default Advantages;