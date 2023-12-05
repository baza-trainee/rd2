import React, {useEffect, useState} from "react";

import {Box, IconButton} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import MenuIcon from "@mui/icons-material/Menu";

import Drawer from "@mui/material/Drawer";

import {useLocation} from "react-router-dom";

import {
  DonateButtonStyled,
  LanguageMenuStyled,
  NavStyled,
  TabletContainer,
  WrapBlock,
} from "./TabletNav.styled";

export const TabletNav = () => {

  const location = useLocation();
  const { pathname } = location;
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

    function handleReset() {
        setState({ right: false });
    }

    useEffect(() => {
        setState({ right: false });
    }, [pathname]);

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

            <Box onClick={handleReset}
                 onKeyDown={toggleDrawer(false)}
                 role="presentation"
            >
                <NavStyled />
            </Box>

          <LanguageMenuStyled />

        </WrapBlock>

      </Drawer>

    </TabletContainer>
  );
};