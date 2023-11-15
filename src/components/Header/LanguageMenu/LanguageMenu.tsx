import React from "react";
import Button from "@mui/material/Button";
import {Menu} from "@mui/material";

import {changeLanguage} from "i18next";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {LanguageMenuWrap} from "./LanguageMenu.styled";
import {MenuItemsList} from "./MenuItemsList/MenuItemsList";

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
    changeLanguage(e.currentTarget.id);
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
          <MenuItemsList onClick={onClickMenuItem}/>
      </Menu>

    </LanguageMenuWrap>
  );
};

