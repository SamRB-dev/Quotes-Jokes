// Imports
import "../css/Header.css";
import { BrowserRouter as Router , Link} from "react-router-dom";

function Header() {
  return (
    <Router>
      <nav className="nav">
        <div className="nav-logo">
          <h2>Quotes&Jokes</h2>
        </div>

        <div className="nav-github-fork">
          <a href="https://github.com/SamRB-dev">Fork on Github</a>
        </div>

        <div className="quote-or-jokes">
          <ul>
            <li className="Custom-Gradiant-Linear-2">
              <Link to ="/">Quotes</Link>
            </li>
            <li>|</li>
            <li className="Custom-Gradiant-Linear-2">
              <Link href="/Jokes">Jokes</Link>
            </li>
          </ul>
        </div>

        <h2 className="nav-note">New Quotes will be Available in Every 10 minutes</h2>
      </nav>
    </Router>
  );
}

export default Header;
