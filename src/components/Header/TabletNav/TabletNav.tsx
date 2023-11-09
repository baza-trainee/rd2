import React, {useState} from "react";

import {IconButton} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import MenuIcon from "@mui/icons-material/Menu";

import Drawer from "@mui/material/Drawer";

import {
  DonateButtonStyled,
  LanguageMenuStyled,
  NavStyled,
  TabletContainer,
  WrapBlock,
} from "./TabletNav.styled";

export const TabletNav = () => {

  const [state, setState] = useState({right: false});

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
                    ((event as React.KeyboardEvent).key === "Tab" ||
                        (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ right: open });
    };

  return (
    <TabletContainer>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            "@media (min-width: 468px)": {
              width: "360px",
            },
          },
        }}
      >
        <WrapBlock>

          <IconButton
            aria-label="close"
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>

          <DonateButtonStyled />

          <NavStyled
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}/>

          <LanguageMenuStyled />

        </WrapBlock>

      </Drawer>

    </TabletContainer>
  );
};