import { Logo, Rules } from "types/typeFooter";

import logo from "assets/images/footer/logo.png";

export const logoImg: Logo = {
  src: logo,
  alt: "Логотип",
};

export const rulesList: Rules[] = [
  {
    id: "privacy_policy",
    descKey: "our_rules.privacy_policy",
    filePath: "/api/report/private-policy/",
  },
  {
    id: "terms_use",
    descKey: "our_rules.using_site",
    filePath: "/api/report/terms-use/",
  },
  {
    id: "publicity",
    descKey: "our_rules.publicity",
    filePath: "/api/report/reports/",
  },
];
