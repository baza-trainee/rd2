import React from "react";
import Button from "@mui/material/Button";
import {Divider, Menu, MenuItem} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {LanguageMenuWrap} from "./LanguageMenu.styled";

export const LanguageMenu = () => {

    const [menuLang, setMenuLang] = React.useState("UA")

    const [menuButton, setMenuButton] = React.useState<null | HTMLElement>(null);
    const open = Boolean(menuButton);
    const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        setMenuButton(e.currentTarget);
        console.log(e.currentTarget.innerText);
    };

    const onCloseMenu = () => {
        setMenuButton(null);
    };
    const onClickMenuItem = (e: React.MouseEvent<HTMLElement>) => {
        onCloseMenu();
        setMenuLang(e.currentTarget.innerText);
    };

    return (
        <LanguageMenuWrap opened ={open}>
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
            >
                <MenuItem onClick={onClickMenuItem}
                          sx={{
                              paddingRight: "30px",
                              paddingLeft: "30px",
                          }}
                >UA</MenuItem>
                <Divider />
                <MenuItem onClick={onClickMenuItem}
                          sx={{
                              paddingRight: "30px",
                              paddingLeft: "30px",
                          }}
                >EN</MenuItem>
                <Divider />
                <MenuItem onClick={onClickMenuItem}
                          sx={{
                              paddingRight: "30px",
                              paddingLeft: "30px",
                          }}
                >FR</MenuItem>
                <Divider />
                <MenuItem onClick={onClickMenuItem}
                          sx={{
                              paddingRight: "30px",
                              paddingLeft: "30px",
                          }}
                >DE</MenuItem>
            </Menu>
        </LanguageMenuWrap>
    )
}

