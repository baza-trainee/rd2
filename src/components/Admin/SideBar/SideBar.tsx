import { Drawer, Grid, List } from "@mui/material";

// eslint-disable-next-line max-len
import { ButtonChangePassword } from "features/components/admin/sidebar/ButtonChangePassword/ButtonChangePassword";
import { ButtonLeave } from "features/components/admin/sidebar/ButtonLeave/ButtonLeave";
import { MenuButton } from "features/components/admin/sidebar/MenuButton/MenuButton";

import iconChangePassword from "assets/icons/admin/change-password.png";
import iconLeave from "assets/icons/admin/leave.png";

import { DrawerStyles } from "./SideBar.classes";
import { buttonsList } from "./buttonsList";

export const ToolBar = () => {
  return (
    <Drawer variant="permanent" sx={DrawerStyles}>
      <Grid container height="100%">
        <Grid sx={{ paddingTop: "104px" }} xs={12} item>
          <List>
            {buttonsList.map(({ id, icon, buttonText }) => (
              <MenuButton key={id} icon={icon} buttonText={buttonText} />
            ))}
          </List>
        </Grid>

        <Grid xs={12} item>
          <List>
            <ButtonChangePassword icon={iconChangePassword} buttonText="Змінити пароль" />

            <ButtonLeave icon={iconLeave} buttonText="Вихід" />
          </List>
        </Grid>
      </Grid>
    </Drawer>
  );
};
