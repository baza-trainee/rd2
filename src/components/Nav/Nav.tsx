import data from "data/common/nav.json";

import { NavigationLink } from "./Nav.styled";

interface NavProps {
 className?: string;
}

export const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <nav className={className}>
      {data.navNames.map((navItem) => (
        <NavigationLink key={navItem.id} to={navItem.route}>
          {navItem.name}
        </NavigationLink>
      ))}
    </nav>
  );
};
