import React from "react";

import { LogoLink } from "./FooterLogo.styled";
import { logoImg } from "./../footerList";

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
