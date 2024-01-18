import {
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  SvgIcon,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

import { SidebarIcon } from "components/Admin/sidebar/ToolBar/buttonsList";

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
