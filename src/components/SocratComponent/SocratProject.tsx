import React, { useRef, useState } from "react";

import {useTranslation} from "react-i18next";

import DronImgMob from "../../assets/images/socrat/Drone_mob-min.png";
import DronImgMob2x from "../../assets/images/socrat/Drone_mob@2x-min.png";
import DronImgTab from "../../assets/images/socrat/Drone_tab-min.png";
import DronImgTab2x from "../../assets/images/socrat/Drone_tab@2x-min.png";
import DronImgDesk from "../../assets/images/socrat/Drone_desk-min.png";
import DronImgDesk2x from "../../assets/images/socrat/Drone_desk@2x-min.png";

import { SocratListAbout, SocratListQuestion } from "./SocratList";

import {
  Container,
  Accordion,
  Picture,
  SocrstHeader,
  TitleText,
  SocratAboutWrapper,
  SocratAboutItem,
  SocratAboutTitle,
  SocratAboutText,
} from "./Socrat.styled";
import {AccordionItem} from "./AccordionItem/AccordionItem";

export const SocratProject: React.FC = () => {

  const { t } = useTranslation();

  const [openId, setId] = useState<null | number>(null);

  const clickHandler = (id: number) => {
    return () => {
      (id === openId) ? setId(null) : setId(id);
    }
  };

  return (
    <div>

      <Container>

        <SocrstHeader>{ t("about_socrat_block.title") }</SocrstHeader>

        <TitleText>{ t("about_socrat_block.about") }</TitleText>

        <Picture>
          <source
            srcSet={`${DronImgDesk} 1x, ${DronImgDesk2x} 2x`}
            media="(min-width: 1440px)"
          />
          <source
            srcSet={`${DronImgTab} 1x, ${DronImgTab2x} 2x`}
            media="(min-width: 768px)"
          />

          <img src={DronImgMob} srcSet={`${DronImgMob2x} 2x`} alt="dron" />
        </Picture>

        <SocratAboutWrapper>
          {SocratListAbout.map(({ id, titleKey, textKey }) => {
            return (
              <SocratAboutItem key={id}>
                <SocratAboutTitle>{t(titleKey)}</SocratAboutTitle>
                <SocratAboutText>{t(textKey)}</SocratAboutText>
              </SocratAboutItem>
            );
          })}
        </SocratAboutWrapper>

      </Container>

      <Accordion>
        {SocratListQuestion.map(({ id, titleKey, textKey }) => {

          const itemText = t(textKey, {returnObjects: true});

          return (
            <AccordionItem
                key={id}
                itemText={itemText}
                titleKey={titleKey}
                id={id}
                openId={openId}
                clickHandler={clickHandler}
            />

          );
        })}
      </Accordion>
    </div>
  );
};
