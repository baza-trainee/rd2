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
  CardItemWrapper,
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
            {ScientificActivityList.map(({ id, title, text, img }) => {
              return (
                <Cards key={id}>
                  {windowWidth < 768 ? (
                    <>
                      <ActivityImg src={img} alt={title} />

                      <CardTextWrap>
                        <CardTitle>{title}</CardTitle>
                        <p>{text}</p>
                      </CardTextWrap>
                    </>
                  ) : (
                    <>
                      {id % 2 === 0 ? (
                        <>
                          <CardTextWrap>
                            <CardItemWrapper>
                              <CardTitle>{title}</CardTitle>
                              <p>{text}</p>
                            </CardItemWrapper>
                          </CardTextWrap>

                          <ActivityImg src={img} alt={title} />
                        </>
                      ) : (
                        <>
                          <ActivityImg src={img} alt={title} />

                          <CardTextWrap>
                            <CardItemWrapper>
                              <CardTitle>{title}</CardTitle>
                              <p>{text}</p>
                            </CardItemWrapper>
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
