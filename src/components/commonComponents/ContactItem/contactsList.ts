import phoneIcon from "assets/icons/footerIcons/phone.svg";
import emailIcon from "assets/icons/footerIcons/email.svg";
import markerIcon from "assets/icons/footerIcons/map-marker.svg";

import {Contacts} from "../../../types/typeFooter";

export const contactsList: Contacts[] = [
    {
        id: 1,
        icon: emailIcon,
        alt: "Іконка листа",
        desc: "2021snp@ukr.net",
    },
    {
        id: 2,
        icon: phoneIcon,
        alt: "Іконка телефону",
        desc: "+38 (044) 209 5302",
    },
    {
        id: 3,
        icon: markerIcon,
        alt: "Іконка маркеру на карті",
        desc: "вул. Олеся Гончара 55 б, Київ, Україна 01601",
    },
];

