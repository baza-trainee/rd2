import { PropsWithChildren } from "react";

import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import {
  ContactFormBlock,
  FormTitleStyled,
} from "components/Contacts/ContactFormContainer/ContactFormContainer.styled";

export const ContactFormContainer = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();

  return (
    <ContactFormBlock>
      <FormTitleStyled variant="h4" align="center">
        {t("contacts_block.contact_page_title")}
      </FormTitleStyled>

      <Typography align="center">{t("contacts_block.contact_page_desc")}</Typography>

      {children}
    </ContactFormBlock>
  );
};
