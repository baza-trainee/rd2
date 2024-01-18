import { useTranslation } from "react-i18next";

import { useGetCurrentPhone } from "api/query-hooks/useGetCurrentPhone";
import { useGetCurrentEmail } from "api/query-hooks/useGetCurrentEmail";

import {
  StyledText,
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

export const ContactItem = (props: ContactItemProps) => {
  const { t } = useTranslation();
  const { isError: isErrorPhoneNumber, data: phoneData } = useGetCurrentPhone();
  const { isError: isErrorEmail, data: emailData } = useGetCurrentEmail();

  const currentEmail = isErrorEmail ? "наш email" : emailData?.email;
  const currentPhoneNumber = isErrorPhoneNumber ? "наш телефон" : phoneData?.phone;

  const { icon, alt, descKey, href, type } = props;

  switch (type) {
    case "email":
      return (
          <StyledText>
            <img src={icon} width={24} height={24} alt={alt} />
            <span>{currentEmail}</span>
          </StyledText>
      );

    case "link":
      return (
        <StyledLink href={`tel:${currentPhoneNumber}`} target="_blank">
          <StyledText>
            <img src={icon} width={24} height={24} alt={alt} />
            <span>{currentPhoneNumber}</span>
          </StyledText>
        </StyledLink>
      );

    case "translatedLink":
      return (
        <StyledLink href={href} target="_blank">
          <StyledText>
            <img src={icon} width={24} height={24} alt={alt} />
            <span>{t(descKey)}</span>
          </StyledText>
        </StyledLink>
      );
    default:
      return <></>;
  }
};
