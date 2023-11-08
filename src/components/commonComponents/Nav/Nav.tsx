import data from "data/common/nav.json";
import React from "react";

import { NavigationLink } from "./Nav.styled";

interface NavProps {
 className?: string;
    onClick?: (e:React.KeyboardEvent | React.MouseEvent) => void
    onKeyDown?: (e:React.KeyboardEvent | React.MouseEvent) => void
}

export const Nav: React.FC<NavProps> = ({ className,onClick, onKeyDown}) => {
  return (
    <nav className={className} onClick={onClick} onKeyDown={onKeyDown}>
      {data.navNames.map((navItem) => (
        <NavigationLink key={navItem.id} to={navItem.route}>
          {navItem.name}
        </NavigationLink>
      ))}
    </nav>
  );
};
