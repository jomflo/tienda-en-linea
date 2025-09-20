import React from "react";
import "../styles/Menu.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Menu({ showNavigation, handleClickMenu }) {
  const handleClick = () => {
    handleClickMenu();
  };

  return (
    <div className="menu">
      {showNavigation ? (
        <AiOutlineClose className="menu-button" onClick={handleClick} />
      ) : (
        <AiOutlineMenu className="menu-button" onClick={handleClick} />
      )}
    </div>
  );
}
