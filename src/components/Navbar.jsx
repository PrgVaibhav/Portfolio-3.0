import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <span>{`</Vaibhav>`}</span>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/blogs">
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
