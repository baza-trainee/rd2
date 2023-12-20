import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

import { loadData } from "api/loadData";
import { getCurrentEmail } from "api/getCurrentEmail";
import { getCurrentPhoneNumber } from "api/getCurrentPhoneNumber";

import { AddressItem, StyledLink } from "./ContactItem.styled";

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

  const { data: phoneNumber, isError: isErrorPhoneNumber } = useQuery({
    queryKey: "phone",
    queryFn: loadData(getCurrentPhoneNumber),
  });

  const { data: email, isError: isErrorEmail } = useQuery({
    queryKey: "email",
    queryFn: loadData(getCurrentEmail),
  });

  const currentEmail = isErrorEmail ? "наш email" : email?.email;
  const currentPhoneNumber = isErrorPhoneNumber ? "наш телефон" : phoneNumber?.phone;

  const { icon, alt, descKey, href, type } = props;

  switch (type) {
    case "text":
      return (
        <AddressItem>
          <img src={icon} width={24} height={24} alt={alt} />
          <span>{currentEmail}</span>
        </AddressItem>
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
