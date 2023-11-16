import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Menu} from "@mui/material";

import {changeLanguage} from "i18next";

import {useTranslation} from "react-i18next";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {LanguageMenuWrap} from "./LanguageMenu.styled";
import {MenuItemsList} from "./MenuItemsList/MenuItemsList";

interface LanguageMenuProps {
    className?: string
}

export const LanguageMenu = ({ className }: LanguageMenuProps) => {

  const {i18n} = useTranslation();

  const [menuLang, setMenuLang] = useState(i18n.language);

  const [menuButton, setMenuButton] = useState<null | HTMLElement>(null);

  const open = Boolean(menuButton);
  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuButton(e.currentTarget);
  };

  const onCloseMenu = () => {
    setMenuButton(null);
  };
  const onClickMenuItem = (e: React.MouseEvent<HTMLElement>) => {
      const lang = e.currentTarget.id
    changeLanguage(lang)
        .then(() => {
            onCloseMenu();
            //setMenuLang(i18n.language);
            //setMenuLang(lang);
            console.log("state: " + menuLang)
        });

  };

    useEffect(() => {
        i18n.on("languageChanged",
            (lng)=> setMenuLang(i18n.language))
    }, []);

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

