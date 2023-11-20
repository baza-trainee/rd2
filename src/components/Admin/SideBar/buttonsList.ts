import {ReactElement} from "react";

import ChatIcon from "@mui/icons-material/Chat";

import {SvgIconComponent} from "@mui/icons-material";

import {contactsSvgIcon} from "assets/icons/admin/contacts";

import {partnersSvgIcon} from "../../../assets/icons/admin/partners";

import {reportsSvgIcon} from "../../../assets/icons/admin/reports";
import {ROUTES_ENUM} from "../../../types/enums/routes.enum";

type CustomIcon = {
  iconType: "custom";
  iconEl: ReactElement<SVGElement>;
}

type MuiIcon = {
  iconType: "mui";
  iconEl: SvgIconComponent;
  //iconName: string;
}

export type SidebarIcon = CustomIcon | MuiIcon;

export interface SidebarButton {
  id: number;
  routePath: string;
  buttonText: string;
  icon: SidebarIcon;
}

export const buttonsList: SidebarButton[] = [
  { id: 1,
    routePath: ROUTES_ENUM.ADMINPARTNERS,
    icon: {iconType: "custom", iconEl: partnersSvgIcon },
    buttonText: "Лого партнерів",
  },
  { id: 2,
    routePath: ROUTES_ENUM.ADMINREPORTS,
    icon: {iconType: "custom", iconEl: reportsSvgIcon },
    buttonText: "Звітність",
  },
  { id: 3,
    routePath: ROUTES_ENUM.ADMINOURCONTACTS,
    icon: {iconType: "custom", iconEl: contactsSvgIcon},
    buttonText: "Контакти",
  },
  { id: 4,
    routePath: ROUTES_ENUM.ADMINFEEDBACK,
    icon: {iconType: "mui", iconEl: ChatIcon },
    buttonText: "Звернення",
  },
];
