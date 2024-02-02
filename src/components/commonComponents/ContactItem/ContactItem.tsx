import {useContext, useEffect} from "react";

import { useTranslation } from "react-i18next";

import { useGetCurrentPhone } from "api/query-hooks/useGetCurrentPhone";

import {useGetCurrentEmail} from "api/query-hooks/useGetCurrentEmail";

import {
  StyledText,
  StyledLink,
} from "components/commonComponents/ContactItem/ContactItem.styled";

import {CacheContext} from "../../../App";

type ContactItemProps = {
  type: string;
  icon: string;
  alt: string;
  desc?: string;
  descKey?: string;
  href?: string;
};



export const ContactItem = (props: ContactItemProps) => {

  const isCache = useContext(CacheContext);
  const { t } = useTranslation();

  const {
    isError: isErrorPhoneNumber,
    data: phoneData,
  } = useGetCurrentPhone(!isCache.cache.phoneIsLoaded);

  const {
    isError: isErrorEmail,
    data: emailData,
  } = useGetCurrentEmail(!isCache.cache.emailIsLoaded);

  const currentEmail = isErrorEmail ? "info@demining-georesource.tech" : emailData?.email;
  // change info@demining-georesource.tech to "наш email" after connecting backend
  const currentPhoneNumber = isErrorPhoneNumber ? "+380442095302" : phoneData?.phone;
  // change +38 (044) 209 5302 to "наш телефон" after connecting backend

  const { icon, alt, descKey, href, type } = props;

  useEffect(() => {

    if ( type==="email" && !isCache.cache.emailIsLoaded ) {
        isCache.setCache({...isCache.cache, emailIsLoaded: true})
    }

    if ( type==="link" && !isCache.cache.phoneIsLoaded ) {
         isCache.setCache({...isCache.cache, phoneIsLoaded: true})
    }
  }, []);

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
