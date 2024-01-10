/* eslint-disable max-len */
import { Drawer, Grid, List, ListItem } from "@mui/material";

import iconLeave from "assets/icons/admin/leave.png";

import { ButtonLeave } from "components/Admin/sidebar/ButtonLeave/ButtonLeave";
import { MenuButton } from "components/Admin/sidebar/MenuButton/MenuButton";
import { buttonsList } from "components/Admin/sidebar/ToolBar/buttonsList";

import { DrawerStyles } from "components/Admin/sidebar/ToolBar/ToolBar.classes";
import { NavLinkStyled } from "components/Admin/sidebar/ToolBar/ToolBar.styles";

import { changePasswordSvgIcon } from "assets/icons/admin/change-password";

import {ROUTES_ENUM} from "../../../../types/enums/routes.enum";

export const ToolBar = () => {
  return (
    <Drawer variant="permanent" sx={DrawerStyles}>
      <Grid container height="100%">
        <Grid sx={{ paddingTop: "104px" }} xs={12} item>

          <List>
            {buttonsList.map(({ id, icon, buttonText, routePath }) => (
              <ListItem disablePadding key={id}>
                <NavLinkStyled to={routePath} >
                  <MenuButton icon={icon} buttonText={buttonText} />
                </NavLinkStyled>
              </ListItem>
            ))}
          </List>

          <List>
            <ListItem disablePadding sx={{ marginBottom: "34px", marginTop: "34px" }}>
              <NavLinkStyled to={ROUTES_ENUM.CHANGE_PASSWORD} >
                <MenuButton icon={{ iconType: "custom", iconEl: changePasswordSvgIcon }}
                            buttonText="Змінити пароль"
                />
              </NavLinkStyled>
            </ListItem>

            <ButtonLeave icon={iconLeave} buttonText="Вихід" />
          </List>

        </Grid>

      </Grid>
    </Drawer>
  );
};
