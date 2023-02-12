import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const NavbarItem = ({ link, path }) => {
  return (
    <li>
      <Link to={path}>{link}</Link>
    </li>
  );
};

NavbarItem.propTypes = {
  link: PropTypes.string,
  path: PropTypes.string,
};
