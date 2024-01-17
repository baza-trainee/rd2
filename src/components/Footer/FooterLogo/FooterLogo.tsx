import { logoImg } from "components/Footer/footerList";

import { LogoLink } from "components/Footer/FooterLogo/FooterLogo.styled";

export const FooterLogo = () => {
  return (
    <div>
      <LogoLink href="/">
        <img src={logoImg.src} alt={logoImg.alt} width="117" height="149" />
      </LogoLink>
    </div>
  );
};
