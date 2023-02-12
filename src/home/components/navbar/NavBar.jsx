import { NavBarContainer } from '../../../style';
import { NavbarItem } from './NavbarItem';
import { navbarLinks } from './navbarLinks';

export const NavBar = () => {
  return (
    <NavBarContainer>
      <ul>
        {navbarLinks.map(({ link, path }, idx) => {
          return <NavbarItem key={idx} link={link} path={path} />;
        })}
      </ul>
    </NavBarContainer>
  );
};
