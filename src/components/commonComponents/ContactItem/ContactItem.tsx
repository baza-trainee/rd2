import { useTranslation } from "react-i18next";

import { useGetCurrentPhone } from "api/query-hooks/useGetCurrentPhone";
import { useGetCurrentEmail } from "api/query-hooks/useGetCurrentEmail";

import {
  AddressItem,
  StyledLink,
} from "components/commonComponents/ContactItem/ContactItem.styled";

type ContactItemProps = {
  type: string;
  icon: string;
  alt: string;
  desc?: string;
  descKey?: string;
  href?: string;
};

const ContactItem = (props: ContactItemProps) => {
  const { t } = useTranslation();
  const { isError: isErrorPhoneNumber, data: phoneData } = useGetCurrentPhone();
  const { isError: isErrorEmail, data: emailData } = useGetCurrentEmail();

  const currentEmail = isErrorEmail ? "наш email" : emailData?.email;
  const currentPhoneNumber = isErrorPhoneNumber ? "наш телефон" : phoneData?.phone;

  const { icon, alt, descKey, href, type } = props;

  switch (type) {
    case "email":
      return (
        <StyledLink href={`mailto:${currentEmail}`} target="_blank">
          <AddressItem>
            <img src={icon} width={24} height={24} alt={alt} />
            <span>{currentEmail}</span>
          </AddressItem>
        </StyledLink>
      );

    case "link":
      return (
        <StyledLink href={href} target="_blank">
          <AddressItem>
            <img src={icon} width={24} height={24} alt={alt} />
            <span>{currentPhoneNumber}</span>
          </AddressItem>
        </StyledLink>
      );

    case "translatedLink":
      return (
        <StyledLink href={href} target="_blank">
          <AddressItem>
            <img src={icon} width={24} height={24} alt={alt} />
            <span>{t(descKey)}</span>
          </AddressItem>
        </StyledLink>
      );
    default:
      return <></>;
  }
};

export { ContactItem };
