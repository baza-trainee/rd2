import phoneIcon from "assets/icons/footerIcons/phone.svg";
import emailIcon from "assets/icons/footerIcons/email.svg";
import markerIcon from "assets/icons/footerIcons/map-marker.svg";

import { Contacts } from "types/typeFooter";

export const contactsList: Contacts[] = [
  {
    type: "text",
    id: "email",
    icon: emailIcon,
    alt: "Іконка листа",
    desc: "2021snp@ukr.net",
  },
  {
    type: "link",
    id: "phone",
    icon: phoneIcon,
    alt: "Іконка телефону",
    desc: "+38 (044) 209 5302",
    href: "tel:+380442095302",
  },
  {
    type: "translatedLink",
    id: "onMap",
    icon: markerIcon,
    alt: "Іконка маркеру на карті",
    descKey: "our_contacts.address",
    href: "https://maps.app.goo.gl/JRZd6hs3MxNwZrzE8",
  },
];
