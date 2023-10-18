import { NavLink } from "react-router-dom";
import { ROUTES_ENUM } from "types/enums/routes.enum";
import { navNames } from "data/common/nav.json";

export const Nav: React.FC = () => {
  return (
    <nav>
      {navNames.map((navItem: string, index: number) => (
        <NavLink key={index} to={ROUTES_ENUM[navItem as keyof typeof ROUTES_ENUM]}>
          {navItem}
        </NavLink>
      ))}
    </nav>
  );
};
