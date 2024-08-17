import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = ({ isOpen }) => {
  return (
    <div className="text-green-tx">
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
    </div>
  );
};

export default HamburgerMenu;
