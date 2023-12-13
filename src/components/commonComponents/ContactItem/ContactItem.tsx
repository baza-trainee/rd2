import React from "react";

import {useTranslation} from "react-i18next";

import {AddressItem, StyledLink} from "./ContactItem.styled";

type ContactItemProps = {
    type: string;
    icon: string;
    alt: string;
    desc?: string;
    descKey?: string;
    href?: string
}

const ContactItem = ( props: ContactItemProps) => {

  const { t } = useTranslation();

  const {icon, alt, desc, descKey, href, type} = props;

  switch ( type ) {

  case "text":
    return (
      <AddressItem >
        <img src={icon} width={24} height={24} alt={alt} />
        <span>{desc}</span>
      </AddressItem>
    );

  case "link":
    return (
      <StyledLink href={href} target="_blank">
        <AddressItem >
          <img src={icon} width={24} height={24} alt={alt} />
          <span>{desc}</span>
        </AddressItem>
      </StyledLink>
    );

  case "translatedLink":
    return (
      <StyledLink href={href} target="_blank">
        <AddressItem >
          <img src={icon} width={24} height={24} alt={alt} />
          <span>{ t(descKey) }</span>
        </AddressItem>
      </StyledLink>
    );
  default: return <></>;
  }
};

export {ContactItem};