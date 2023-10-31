import React from "react";
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {LanguageMenuWrap} from "./LanguageMenu.styled";

interface LanguageMenuProps {
    className?: string
}

export const LanguageMenu = ({ className }: LanguageMenuProps) => {

  const [menuLang, setMenuLang] = React.useState("UA");

  const [menuButton, setMenuButton] = React.useState<null | HTMLElement>(null);
  const open = Boolean(menuButton);
  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuButton(e.currentTarget);
  };

  const onCloseMenu = () => {
    setMenuButton(null);
  };
  const onClickMenuItem = (e: React.MouseEvent<HTMLElement>) => {
    onCloseMenu();
    setMenuLang(e.currentTarget.innerText);
  };

  return (
    <LanguageMenuWrap opened ={open} className={className}>
      <Button
        id="basic-button"
        aria-controls={open ? "lang-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={onClickMenu}
      >
        {menuLang}
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="lang-menu"
        anchorEl={menuButton}
        open={open}
        onClose={onCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& ul": {
            padding: "0",
          },
          "& .MuiPaper-root": {
            borderRadius: "0 0 5px 5px",
          },
        }}
      >
        <MenuItem onClick={onClickMenuItem}
          sx={{
            padding: "10px 30px",
            borderBottom: "1px solid #E3E3E3",
          }}
        >UA</MenuItem>
        <MenuItem onClick={onClickMenuItem}
          sx={{
            padding: "10px 30px",
            borderBottom: "1px solid #E3E3E3",
          }}
        >EN</MenuItem>
        <MenuItem onClick={onClickMenuItem}
          sx={{
            padding: "10px 30px",
            borderBottom: "1px solid #E3E3E3",
          }}
        >FR</MenuItem>
        <MenuItem onClick={onClickMenuItem}
          sx={{
            padding: "10px 30px",
            borderBottom: "1px solid #E3E3E3",
          }}
        >DE</MenuItem>
      </Menu>
    </LanguageMenuWrap>
  );
};

