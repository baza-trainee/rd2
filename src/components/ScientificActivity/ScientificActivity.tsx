import React from "react";

import {useTranslation} from "react-i18next";

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

  const { t } = useTranslation();

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

            <Title>
              { t("activity_block.title") }
            </Title>

            <Divider></Divider>

            <TitleText>
              { t("activity_block.about") }
            </TitleText>

          </TitleWrap>

          <CardWrapper>
            {ScientificActivityList.map(({ id, titleKey, textKey, img, retinaImg }) => {
              return (
                <Cards key={id}>
                  {windowWidth < 768 ? (
                    <>
                      <ActivityImg src={img} srcSet={`${retinaImg} 2x`} alt={ t(titleKey) } />

                      <CardTextWrap>
                        <CardTitle> { t(titleKey) } </CardTitle>
                        <CardText> { t(textKey) } </CardText>
                      </CardTextWrap>
                    </>
                  ) : (
                    <>
                      {id % 2 === 0 ? (
                        <>
                          <CardTextWrap>
                            <CardTitle> { t(titleKey) } </CardTitle>
                            <CardText> { t(textKey) } </CardText>
                          </CardTextWrap>

                          <ActivityImg srcSet={`${retinaImg} 2x`} src={img} alt={ t(titleKey) } />
                        </>
                      ) : (
                        <>
                          <ActivityImg srcSet={`${retinaImg} 2x`} src={img} alt={ t(titleKey) } />

                          <CardTextWrap>
                            <CardTitle> { t(titleKey) } </CardTitle>
                            <CardText> { t(textKey) } </CardText>
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
