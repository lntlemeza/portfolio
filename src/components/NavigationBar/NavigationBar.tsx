import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>

        <Link to="/contact">Hire Me</Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
