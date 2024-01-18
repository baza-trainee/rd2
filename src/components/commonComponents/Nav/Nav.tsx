import { KeyboardEvent, MouseEvent } from "react";

import { useTranslation } from "react-i18next";

import { navNames } from "components/commonComponents/Nav/navlist";

import { NavigationLink } from "components/commonComponents/Nav/Nav.styled";

interface NavProps {
  className?: string;
  onClick?: (e: KeyboardEvent | MouseEvent) => void;
  onKeyDown?: (e: KeyboardEvent | MouseEvent) => void;
}

export const Nav: React.FC<NavProps> = ({ className, onClick, onKeyDown }) => {
  const { t } = useTranslation();

  return (
    <nav className={className} onClick={onClick}>
      {navNames.map((navItem) => (
        <NavigationLink key={navItem.id} to={navItem.route}>
          {t(navItem.nameKey)}
        </NavigationLink>
      ))}
    </nav>
  );
};
