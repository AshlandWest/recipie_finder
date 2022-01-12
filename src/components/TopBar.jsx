import React from "react";
import NavButton from "./NavButton";

const TopBar = () => {
  return (
    <div id="top-bar">
      <NavButton pageName="Home" path="/" />
      <NavButton pageName="Edit Pantry" path="/EditPantry" />
    </div>
  );
};

export default TopBar;
