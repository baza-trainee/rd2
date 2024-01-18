import { MouseEvent, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { Menu } from "@mui/material";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { LanguageMenuWrap } from "components/Header/LanguageMenu/LanguageMenu.styled";
import { MenuItemsList } from "components/Header/LanguageMenu/MenuItemsList/MenuItemsList";

interface LanguageMenuProps {
  className?: string;
}

export const LanguageMenu = ({ className }: LanguageMenuProps) => {
  const { i18n } = useTranslation();
  const [menuLang, setMenuLang] = useState(i18n.language);
  const [menuButton, setMenuButton] = useState<null | HTMLElement>(null);
  const open = Boolean(menuButton);

  const onClickMenu = (e: MouseEvent<HTMLButtonElement>) => {
    setMenuButton(e.currentTarget);
  };

  const onCloseMenu = () => {
    setMenuButton(null);
  };
  const onClickMenuItem = (e: MouseEvent<HTMLElement>) => {
    changeLanguage(e.currentTarget.id).then(() => onCloseMenu());
  };

  useEffect(() => {
    i18n.on("languageChanged", () => setMenuLang(i18n.language));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LanguageMenuWrap opened={open} className={className}>
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
        <MenuItemsList onClick={onClickMenuItem} />
      </Menu>
    </LanguageMenuWrap>
  );
};
