import "./NavigationBar.css";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  // const pathname = window.location.pathname;

  return (
    <nav className="nav">
      <ul className="nav-items">
        <li>
          <NavLink className="nav-item" to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/contact">
            Hire Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
