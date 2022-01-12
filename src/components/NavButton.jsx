import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ pageName, path }) => {
  return (
    <Link to={path} className="NavButton">
      {pageName}
    </Link>
  );
};

export default NavButton;
