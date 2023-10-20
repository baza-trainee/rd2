import React from "react";

import {Box, IconButton} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import {Menu} from "@mui/material";

import {Nav} from "../../Nav/Nav";

export const HeaderNav = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
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
            display: { xs: "block", lg: "none" },
          }}
        >
          <p>Тут має бути бокове меню, як на макеті</p>
        </Menu>

      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
        <Nav />
      </Box>

    </div>

  );
};