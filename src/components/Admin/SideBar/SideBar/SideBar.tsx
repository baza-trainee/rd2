/* eslint-disable max-len */
import { Drawer, Grid, List } from "@mui/material";

import iconLeave from "assets/icons/admin/leave.png";
import iconChangePassword from "assets/icons/admin/change-password.png";
import { ButtonChangePassword } from "components/Admin/SideBar/ButtonChangePassword/ButtonChangePassword";
import { ButtonLeave } from "components/Admin/SideBar/ButtonLeave/ButtonLeave";
import { MenuButton } from "components/Admin/SideBar/MenuButton/MenuButton";
import { buttonsList } from "components/Admin/SideBar/SideBar/buttonsList";

import { DrawerStyles } from "components/Admin/SideBar/SideBar/SideBar.classes";
import { NavLinkStyled } from "components/Admin/SideBar/SideBar/SideBar.styles";

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
