import { useTranslation } from "react-i18next";

import { ContactItem } from "components/commonComponents/ContactItem/ContactItem";
import { contactsUsList } from "components/Contacts/OurContacts/contactsUsList";

import {
  OurContactsBlock,
  ContactsTitleStyled,
  BlockItem,
  ItemTitle,
} from "components/Contacts/OurContacts/OurContacts.styled";

export const OurContacts = () => {
  const { t } = useTranslation();

  return (
    <OurContactsBlock>
      <ContactsTitleStyled variant="h4" align="center">
        {t("our_contacts.title")}
      </ContactsTitleStyled>

      {contactsUsList.map((item) => {
        return (
          <BlockItem key={item.info.alt + item.info.id}>
            <ItemTitle>{t(item.title)}</ItemTitle>

            <ContactItem {...item.info} />
          </BlockItem>
        );
      })}
    </OurContactsBlock>
  );
};
