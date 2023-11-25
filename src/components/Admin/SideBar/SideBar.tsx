import { Drawer, Grid, List } from "@mui/material";

// eslint-disable-next-line max-len
import { ButtonChangePassword } from "features/admin/sidebar/ButtonChangePassword/ButtonChangePassword";
import { ButtonLeave } from "features/admin/sidebar/ButtonLeave/ButtonLeave";
import { MenuButton } from "features/admin/sidebar/MenuButton/MenuButton";

import iconChangePassword from "assets/icons/admin/change-password.png";
import iconLeave from "assets/icons/admin/leave.png";

import { DrawerStyles } from "./SideBar.classes";
import { buttonsList } from "./buttonsList";

import { NavLinkStyled } from "./SideBar.styles";

export const ToolBar = () => {
  return (
    <Drawer variant="permanent" sx={DrawerStyles}>
      <Grid container height="100%">
        <Grid sx={{ paddingTop: "104px" }} xs={12} item>
          <List>
            {buttonsList.map(({ id, icon, buttonText, routePath }) => (
              <NavLinkStyled to={routePath} key={id}>
                <MenuButton icon={icon} buttonText={buttonText} />
              </NavLinkStyled>
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
