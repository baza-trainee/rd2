/* eslint-disable indent */
import {
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  SvgIcon,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

import { SidebarIcon } from "components/Admin/sidebar/SideBar/buttonsList";

interface Props {
  icon: SidebarIcon;
  buttonText: string;
}

interface IMenuButtonIconProps {
  icon: SidebarIcon;
}
const MenuButtonIcon = ({ icon }: IMenuButtonIconProps) => {
  switch (icon.iconType) {
    case "custom":
      return <SvgIcon>{icon.iconEl}</SvgIcon>;

    case "mui":
      //const elem = icon.iconEl;
      //console.log(elem);
      //console.log(children);
      return <ChatIcon />;
  }
};

export const MenuButton = ({ icon, buttonText }: Props) => {
  return (
    <ListItemAvatar>
      <ListItemButton sx={{ paddingInline: "24px" }}>
        <MenuButtonIcon icon={icon} />

        <ListItemText sx={{ paddingLeft: "12px" }}>
          <Typography variant="h6">{buttonText}</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItemAvatar>
  );
};
