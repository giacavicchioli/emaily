import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <>
            <li>
              <Link to="/surveys" className="right hide-on-med-and-down">
                Dashboard
              </Link>
            </li>
            <li>
              <a href="/api/logout" className="right hide-on-med-and-down">
                Logout
              </a>
            </li>
          </>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth
  };
}
export default connect(mapStateToProps)(Header);
