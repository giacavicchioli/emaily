import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
            <li>
              <Link to="/surveys" className="right hide-on-med-and-down">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
