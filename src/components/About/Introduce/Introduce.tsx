import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import mobImg from "assets/images/introduce/mob-min.png";
import mobImg2 from "assets/images/introduce/mob2-min.png";
import mobImg2x from "assets/images/introduce/mob@2x-min.png";
import mobImg2x2 from "assets/images/introduce/mob2@2x-min.png";

import tabImg from "assets/images/introduce/tab-min.png";
import tabImg2 from "assets/images/introduce/tab2-min.png";
import tabImg2x from "assets/images/introduce/tab@2x-min.png";
import tabImg2x2 from "assets/images/introduce/tab2@2x-min.png";

import deskImg from "assets/images/introduce/desk-min.png";
import deskImg2 from "assets/images/introduce/desk2-min.png";
import deskImg2x from "assets/images/introduce/desk@2x-min.png";
import deskImg2x2 from "assets/images/introduce/desk2@2x-min.png";

import {
  Container,
  SectionWrapper,
  ItemWrapper,
  Pictures,
  Text,
  Text2,
} from "./Introduse.styled";

export const Introduce = () => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    return (window.onresize = () => {
      setWindowWidth(window.screen.width);
    });
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
                      width={631} height={483}
                    />
                    <source
                      srcSet={`${tabImg} 1x, ${tabImg2x} 2x`}
                      media="(min-width: 768px)"
                      width={631} height={483}
                    />
                    <img src={mobImg} srcSet={`${mobImg2x} 2x`} alt="dron"
                         width={631} height={483}
                    />
                  </picture>
                </Pictures>
                <Text>{t("introduce_block.item_1_text")}</Text>
              </ItemWrapper>
              <ItemWrapper>
                <Pictures>
                  <picture>
                    <source
                      srcSet={`${deskImg2} 1x, ${deskImg2x2} 2x`}
                      media="(min-width: 1440px)"
                      width={588} height={480}
                    />
                    <source
                      srcSet={`${tabImg2} 1x, ${tabImg2x2} 2x`}
                      media="(min-width: 768px)"
                      width={588} height={480}
                    />
                    <img src={mobImg2} srcSet={`${mobImg2x2} 2x`} alt="dron"
                         width={588} height={480}
                    />
                  </picture>
                </Pictures>
                <Text>{t("introduce_block.item_2_text")}</Text>
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
                <Text>{t("introduce_block.item_1_text")}</Text>
              </ItemWrapper>
              <ItemWrapper>
                <Text2>{t("introduce_block.item_2_text")}</Text2>
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
