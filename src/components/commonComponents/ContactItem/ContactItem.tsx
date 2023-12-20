import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

import { loadData } from "api/loadData";
import { getCurrentEmail } from "api/getCurrentEmail";

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
  const { data: email, isError } = useQuery({
    queryKey: "email",
    queryFn: loadData(getCurrentEmail),
  });

  const currentEmail = isError ? "наш email" : email;

  const { t } = useTranslation();

  const { icon, alt, desc, descKey, href, type } = props;

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
            <span>{desc}</span>
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
