import React from "react";

import { logoImg } from "../footerList";

import { LogoLink } from "./FooterLogo.styled";

export const FooterLogo: React.FC = () => {
  return (
    <div>
      <LogoLink href="/">
        <img
          src={logoImg.src}
          alt={logoImg.alt}
          width="117"
          height="149"
        />
      </LogoLink>
    </div>
  );
};
