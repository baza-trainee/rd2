import React from "react";

import mobImg from "../../assets/images/introduce/mob-min.png";
import mobImg2 from "../../assets/images/introduce/mob2-min.png";
import mobImg2x from "../../assets/images/introduce/mob@2x-min.png";
import mobImg2x2 from "../../assets/images/introduce/mob2@2x-min.png";

import tabImg from "../../assets/images/introduce/tab-min.png";
import tabImg2 from "../../assets/images/introduce/tab2-min.png";
import tabImg2x from "../../assets/images/introduce/tab@2x-min.png";
import tabImg2x2 from "../../assets/images/introduce/tab2@2x-min.png";

import deskImg from "../../assets/images/introduce/desk-min.png";
import deskImg2 from "../../assets/images/introduce/desk2-min.png";
import deskImg2x from "../../assets/images/introduce/desk@2x-min.png";
import deskImg2x2 from "../../assets/images/introduce/desk2@2x-min.png";

import {
  Container,
  SectionWrapper,
  ItemWrapper,
  Pictures,
  Text,
  Text2,
} from "./Introduse.styled";

export const Introduce: React.FC = () => {
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
          {windowWidth < 768 ? (
            <>
              <ItemWrapper>
                <Pictures>
                  <picture>
                    <source
                      srcSet={`${deskImg} 1x, ${deskImg2x} 2x`}
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcSet={`${tabImg} 1x, ${tabImg2x} 2x`}
                      media="(min-width: 768px)"
                    />
                    <img src={mobImg} srcSet={`${mobImg2x} 2x`} alt="dron" />
                  </picture>
                </Pictures>
                <Text>
                  Колектив Державного підприємства «Науково-дослідний центр проблем
                  надрокористування «Георесурс»» НАН України проводить тестування існуючої
                  розробки та обладнання сучасної методики визначення місць знаходження
                  вибухонебезпечних предметів методом пульсуючого електромагнітного
                  зондування (ПЕМЗ)
                </Text>
              </ItemWrapper>
              <ItemWrapper>
                <Pictures>
                  <picture>
                    <source
                      srcSet={`${deskImg2} 1x, ${deskImg2x2} 2x`}
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcSet={`${tabImg2} 1x, ${tabImg2x2} 2x`}
                      media="(min-width: 768px)"
                    />
                    <img src={mobImg2} srcSet={`${mobImg2x2} 2x`} alt="dron" />
                  </picture>
                </Pictures>
                <Text>
                  У рамках проекту Державного підприємства «Науково-дослідний центр
                  проблем надрокористування «Георесурс»» НАН України, спільно зі
                  спеціалістами Національної академії внутрішніх справ, ДСНС,
                  Держспецтрансслужби, Сил підтримки Збройних Сил України проводить
                  тестування розробки методики визначення територій знаходження
                  вибухонебезпечних предметів методом пульсуючого електромагнітного
                  зондування.
                </Text>
              </ItemWrapper>
            </>
          ) : (
            <>
              <ItemWrapper>
                <Pictures>
                  <picture>
                    <source
                      srcSet={`${deskImg} 1x, ${deskImg2x} 2x`}
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcSet={`${tabImg} 1x, ${tabImg2x} 2x`}
                      media="(min-width: 768px)"
                    />
                    <img src={mobImg} srcSet={`${mobImg2x} 2x`} alt="dron" />
                  </picture>
                </Pictures>
                <Text>
                  Колектив Державного підприємства «Науково-дослідний центр проблем
                  надрокористування «Георесурс»» НАН України проводить тестування існуючої
                  розробки та обладнання сучасної методики визначення місць знаходження
                  вибухонебезпечних предметів методом пульсуючого електромагнітного
                  зондування (ПЕМЗ)
                </Text>
              </ItemWrapper>
              <ItemWrapper>
                <Text2>
                  У рамках проекту Державного підприємства «Науково-дослідний центр
                  проблем надрокористування «Георесурс»» НАН України, спільно зі
                  спеціалістами Національної академії внутрішніх справ, ДСНС,
                  Держспецтрансслужби, Сил підтримки Збройних Сил України проводить
                  тестування розробки методики визначення територій знаходження
                  вибухонебезпечних предметів методом пульсуючого електромагнітного
                  зондування.
                </Text2>
                <Pictures>
                  <picture>
                    <source
                      srcSet={`${deskImg2} 1x, ${deskImg2x2} 2x`}
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcSet={`${tabImg2} 1x, ${tabImg2x2} 2x`}
                      media="(min-width: 768px)"
                    />
                    <img src={mobImg2} srcSet={`${mobImg2x2} 2x`} alt="dron" />
                  </picture>
                </Pictures>
              </ItemWrapper>
            </>
          )}
        </SectionWrapper>
      </Container>
    </>
  );
};
