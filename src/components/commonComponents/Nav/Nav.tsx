import React from "react";

import {useTranslation} from "react-i18next";

import { NavigationLink } from "./Nav.styled";

import {navNames} from "./navlist";

interface NavProps {
 className?: string;
    onClick?: (e:React.KeyboardEvent | React.MouseEvent) => void
    onKeyDown?: (e:React.KeyboardEvent | React.MouseEvent) => void
}

export const Nav: React.FC<NavProps> = ({ className,onClick, onKeyDown}) => {

    const { t } = useTranslation();

    return (
    <nav className={className}>

      {navNames.map((navItem) => (
        <NavigationLink key={navItem.id} to={navItem.route}
        >
            {t(navItem.nameKey)}
        </NavigationLink>
      ))}

    </nav>
  );
};
