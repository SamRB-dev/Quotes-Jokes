// Imports
import "../css/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="nav" id="nav">
      <div className="nav-logo">
        <h2>Quotes&Jokes</h2>
      </div>

      <div className="nav-github-fork">
        <a href="https://github.com/SamRB-dev">Fork on Github</a>
      </div>

      <div className="quote-or-jokes">
        <ul>
          <li className="Custom-Gradiant-Linear-2">
            <NavLink to="/">Quotes</NavLink>
          </li>
          <li>|</li>
          <li className="Custom-Gradiant-Linear-2">
            <NavLink to="/jokes">Jokes</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;