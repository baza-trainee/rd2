import { Logo, Rules, Contacts } from "types/typeFooter";

import phoneIcon from "assets/icons/footerIcons/phone.svg";
import emailIcon from "assets/icons/footerIcons/email.svg";
import markerIcon from "assets/icons/footerIcons/map-marker.svg";
import logo from "assets/images/footer/logo.png";

export const logoImg: Logo = {
  src: logo,
  alt: "Логотип",
};

export const rulesList: Rules[] = [
  {
    id: 1,
    desc: "Політика конфіденційності",
  },
  {
    id: 2,
    desc: "Правила користування сайтом",
  },
  {
    id: 3,
    desc: "Звітність",
  },
];

export const contactsList: Contacts[] = [
  {
    id: 1,
    icon: phoneIcon,
    alt: "Іконка телефону",
    desc: "+38 (044) 209 5302",
  },
  {
    id: 2,
    icon: emailIcon,
    alt: "Іконка листа",
    desc: "2021snp@ukr.net",
  },
  {
    id: 3,
    icon: markerIcon,
    alt: "Іконка маркеру на карті",
    desc: "вул. Олеся Гончара 55 б, Київ, Україна 01601",
  },
];