import { NavLink } from "react-router-dom";
import data from "data/common/nav.json";
import React from "react";

interface NavProps {
 className?: string;
    onClick?: (e:React.KeyboardEvent | React.MouseEvent) => void
    onKeyDown?: (e:React.KeyboardEvent | React.MouseEvent) => void
}

export const Nav: React.FC<NavProps> = ({ className,onClick, onKeyDown}) => {
  return (
    <nav className={className} onClick={onClick} onKeyDown={onKeyDown}>
      {data.navNames.map((navItem) => (
        <NavLink key={navItem.id} to={navItem.route}>
          {navItem.name}
        </NavLink>
      ))}
    </nav>
  );
};
