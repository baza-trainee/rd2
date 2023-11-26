import { useState } from "react";

import { useTranslation } from "react-i18next";

import DronImgMob from "assets/images/socrat/Drone_mob-min.png";
import DronImgMob2x from "assets/images/socrat/Drone_mob@2x-min.png";
import DronImgTab from "assets/images/socrat/Drone_tab-min.png";
import DronImgTab2x from "assets/images/socrat/Drone_tab@2x-min.png";
import DronImgDesk from "assets/images/socrat/Drone_desk-min.png";
import DronImgDesk2x from "assets/images/socrat/Drone_desk@2x-min.png";

import {
  SocratListAbout,
  SocratListQuestion,
} from "components/SocratComponent/SocratList";
import { AccordionItem } from "components/SocratComponent/AccordionItem/AccordionItem";

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
} from "components/SocratComponent/Socrat.styled";

export const SocratProject = () => {
  const { t } = useTranslation();

  const [isOpenAccordion, setIsOpenAccordion] = useState<null | number>(null);

  const handleClickAccordionById = (id: number) => () => {
    id === isOpenAccordion ? setIsOpenAccordion(null) : setIsOpenAccordion(id);
  };

  return (
    <div>
      <Container>
        <SocrstHeader>{t("about_socrat_block.title")}</SocrstHeader>

        <TitleText>{t("about_socrat_block.about")}</TitleText>

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
          const itemText = t(textKey, { returnObjects: true });

          return (
            <AccordionItem
              key={id}
              itemText={itemText}
              titleKey={titleKey}
              id={id}
              isOpenAccordion={isOpenAccordion}
              handleClickAccordionById={handleClickAccordionById}
            />
          );
        })}
      </Accordion>
    </div>
  );
};
