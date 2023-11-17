import React, {MouseEventHandler, useRef} from "react";

import {useTranslation} from "react-i18next";

import closeImg from "../../../assets/icons/SocratIcons/Closed Question.svg";

import openImg from "../../../assets/icons/SocratIcons/Open Question.svg";

import {
    AccordionBody,
    AccordionButton,
    AccordionCollapse,
    AccordionHeader,
    AccordionHeaderWrapper, AccordionItemWrap,
    Img,
} from "./AccordionItem.styled";


type AccordionItemProps = {
    id: number;
    openId: number | null;
    titleKey: string;
    itemText: string | [];
    clickHandler: (id: number) => MouseEventHandler;
}

const AccordionItem = (props: AccordionItemProps) => {

    const {id, openId, titleKey, itemText, clickHandler} = props;

    const { t } = useTranslation();

    const itemRef = useRef<HTMLDivElement>(null!);

    return (
        <AccordionItemWrap >
            <AccordionHeaderWrapper>
                <AccordionHeader>{ t(titleKey) }</AccordionHeader>
                <AccordionButton
                    onClick={clickHandler(id)}
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

        </AccordionItemWrap>
    )
}

export {AccordionItem}