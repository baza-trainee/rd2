/* eslint-disable max-len */
import { Drawer, Grid, List } from "@mui/material";

import iconLeave from "assets/icons/admin/leave.png";
import iconChangePassword from "assets/icons/admin/change-password.png";
import { ButtonChangePassword } from "components/Admin/sidebar/ButtonChangePassword/ButtonChangePassword";
import { ButtonLeave } from "components/Admin/sidebar/ButtonLeave/ButtonLeave";
import { MenuButton } from "components/Admin/sidebar/MenuButton/MenuButton";
import { buttonsList } from "components/Admin/sidebar/ToolBar/buttonsList";

import { DrawerStyles } from "components/Admin/sidebar/ToolBar/ToolBar.classes";
import { NavLinkStyled } from "components/Admin/sidebar/ToolBar/ToolBar.styles";

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
