import React, {useState} from "react";

import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

import ContactForm from "../commonComponents/ContactFormSection/ContactForm";

import {ContactItem} from "../commonComponents/ContactItem/ContactItem";

import {
    BlockItem,
    ContactFormBlock,
    ContactsTitleStyled,
    ContentWrapper, FormTitleStyled,
    ItemTitle,
    OurContactsBlock,
    PageWrapper,
} from "./ContactUs.styled";
import {contactsUsList} from "./contactsUsList";



const ContactUs = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <PageWrapper>
            <Container maxWidth="xl">
                <ContentWrapper>

                    <ContactFormBlock>
                        <FormTitleStyled variant="h4" align="center">
                            Зворотний зв’язок
                        </FormTitleStyled>

                        <Typography align="center">
                            Ваші відгуки та пропозиції будуть корисними для нас.
                        </Typography>

                        <ContactForm  setModal={setIsOpenModal}/>
                    </ContactFormBlock>

                    <OurContactsBlock>
                        <ContactsTitleStyled variant="h4" align="center">
                            Контактні дані
                        </ContactsTitleStyled>

                        {contactsUsList.map((item) => {
                            return (
                                <BlockItem key={item.info.alt + item.info.id}>
                                    <ItemTitle>
                                        {item.title}
                                    </ItemTitle>

                                    <ContactItem
                                        icon={item.info.icon}
                                        alt={item.info.alt}
                                        desc={item.info.desc}/>
                                </BlockItem>
                            )
                        })}


                    </OurContactsBlock>

                </ContentWrapper>
            </Container>
        </PageWrapper>
    )
}

export {ContactUs}