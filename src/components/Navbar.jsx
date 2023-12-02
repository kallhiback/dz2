import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create-post" activeClassName="active">Create Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
