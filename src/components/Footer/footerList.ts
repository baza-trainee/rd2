import { Logo, Rules } from "types/typeFooter";

import logo from "assets/images/footer/logo.png";

export const logoImg: Logo = {
  src: logo,
  alt: "Логотип",
};

export const rulesList: Rules[] = [
  {
    id: 1,
    descKey: "our_rules.privacy_policy",
  },
  {
    id: 2,
    descKey: "our_rules.using_site",
  },
  {
    id: 3,
    descKey: "our_rules.publicity",
  },
];

