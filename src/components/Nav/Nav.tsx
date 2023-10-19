import { NavLink } from "react-router-dom";
import data from "data/common/nav.json";

interface NavProps {
 className?: string;
}

export const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <nav className={className}>
      {data.navNames.map((navItem) => (
        <NavLink key={navItem.id} to={navItem.route}>
          {navItem.name}
        </NavLink>
      ))}
    </nav>
  );
};
