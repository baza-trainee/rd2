import React from "react";

import {Box, IconButton} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import {Menu} from "@mui/material";

export const TabletNav = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", xl: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}

        keepMounted

        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", xl: "none" },
        }}
      >
        <p>Тут має бути бокове меню, як на макеті</p>
      </Menu>

    </Box>
  );
};