import React, { useRef, useState } from "react";

import {useTranslation} from "react-i18next";

import openImg from "../../assets/icons/SocratIcons/Open Question.svg";
import closeImg from "../../assets/icons/SocratIcons/Closed Question.svg";
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
  AccordionItem,
  AccordionHeader,
  AccordionButton,
  AccordionBody,
  AccordionCollapse,
  AccordionHeaderWrapper,
  Img,
  Picture,
  SocrstHeader,
  TitleText,
  SocratAboutWrapper,
  SocratAboutItem,
  SocratAboutTitle,
  SocratAboutText,
} from "./Socrat.styled";

export const SocratProject: React.FC = () => {

  const { t } = useTranslation();

  const [openId, setId] = useState<null | number>(null);

  const itemRef = useRef<HTMLDivElement>(null!);

  const clickHandler = (id: number) => {
    if (id === openId) setId(null);
    else setId(id);
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
            <AccordionItem key={id}>
              <AccordionHeaderWrapper>
                <AccordionHeader>{ t(titleKey) }</AccordionHeader>
                <AccordionButton
                  onClick={() => {
                    clickHandler(id);
                  }}
                >
                  <Img src={id !== openId ? closeImg : openImg} alt="button" />
                </AccordionButton>
              </AccordionHeaderWrapper>
              <AccordionCollapse
                style={
                  openId === id
                    ? { height: itemRef.current.scrollHeight }
                    : { height: "0px" }
                }
              >
                <AccordionBody ref={itemRef}>

                  { (typeof itemText === "string")
                      ? ( <p>{ itemText }</p> )
                      : (
                          itemText.map((item:string, index:number) => {
                            return <li key={index}>{item}</li>;
                          })
                        )
                  }

                </AccordionBody>
              </AccordionCollapse>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
