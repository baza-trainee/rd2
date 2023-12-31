import { MouseEventHandler, useRef } from "react";

import { useTranslation } from "react-i18next";

import closeImg from "assets/icons/SocratIcons/Closed Question.svg";
import openImg from "assets/icons/SocratIcons/Open Question.svg";

import {
  AccordionBody,
  AccordionButton,
  AccordionCollapse,
  AccordionHeader,
  AccordionHeaderWrapper,
  AccordionItemWrap,
  Img,
} from "components/SocratComponent/AccordionItem/AccordionItem.styled";

type AccordionItemProps = {
  id: number;
  isOpenAccordion: number | null;
  titleKey: string;
  itemText: string | [];
  handleClickAccordionById: (id: number) => MouseEventHandler;
};

const AccordionItem = ({
  id,
  isOpenAccordion,
  titleKey,
  itemText,
  handleClickAccordionById,
}: AccordionItemProps) => {
  const { t } = useTranslation();

  const itemRef = useRef<HTMLDivElement>(null!);

  return (
    <AccordionItemWrap>
      <AccordionHeaderWrapper>
        <AccordionHeader>{t(titleKey)}</AccordionHeader>
        <AccordionButton onClick={handleClickAccordionById(id)}>
          <Img src={id !== isOpenAccordion ? closeImg : openImg} alt="button" />
        </AccordionButton>
      </AccordionHeaderWrapper>

      <AccordionCollapse
        style={
          isOpenAccordion === id
            ? { height: itemRef.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <AccordionBody ref={itemRef}>
          {typeof itemText === "string" ? (
            <p>{itemText}</p>
          ) : (
            itemText.map((item: string, index: number) => {
              return <li key={index}>{item}</li>;
            })
          )}
        </AccordionBody>
      </AccordionCollapse>
    </AccordionItemWrap>
  );
};

export { AccordionItem };
