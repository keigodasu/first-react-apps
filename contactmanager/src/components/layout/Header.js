import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <h1>{branding}</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

Header.defaultProps = {
  branding: "MyApp",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
