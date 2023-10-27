import React from "react";

import { ScientificActivityList } from "./ScientificActivityList";
import {
  Container,
  Divider,
  Title,
  SectionWrapper,
  TitleWrap,
  TitleText,
  ActivityImg,
  CardTitle,
  CardTextWrap,
  Cards,
  CardWrapper,
  CardText,
} from "./ScientificActivity.styled";

export const ScientificActivity: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.screen.width);

  React.useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };
  }, [windowWidth]);

  return (
    <>
      <Container>
        <SectionWrapper>
          <TitleWrap>
            <Title>Наукова діяльність</Title>
            <Divider></Divider>
            <TitleText>
              Ми також надаємо корисні поради щодо вибору дрона, використання його
              можливостей та правил безпеки. Наша команда експертів завжди готова надати
              вам консультацію та допомогти з будь-якими питаннями, пов'язаними з дронами.
            </TitleText>
          </TitleWrap>
          <CardWrapper>
            {ScientificActivityList.map(({ id, title, text, img, retinaImg }) => {
              return (
                <Cards key={id}>
                  {windowWidth < 768 ? (
                    <>
                      <ActivityImg src={img} srcSet={`${retinaImg} 2x`} alt={title} />

                      <CardTextWrap>
                        <CardTitle>{title}</CardTitle>
                        <CardText>{text}</CardText>
                      </CardTextWrap>
                    </>
                  ) : (
                    <>
                      {id % 2 === 0 ? (
                        <>
                          <CardTextWrap>
                            <CardTitle>{title}</CardTitle>
                            <CardText>{text}</CardText>
                          </CardTextWrap>

                          <ActivityImg srcSet={`${retinaImg} 2x`} src={img} alt={title} />
                        </>
                      ) : (
                        <>
                          <ActivityImg srcSet={`${retinaImg} 2x`} src={img} alt={title} />

                          <CardTextWrap>
                            <CardTitle>{title}</CardTitle>
                            <CardText>{text}</CardText>
                          </CardTextWrap>
                        </>
                      )}
                    </>
                  )}
                </Cards>
              );
            })}
          </CardWrapper>
        </SectionWrapper>
      </Container>
    </>
  );
};
