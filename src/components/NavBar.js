import React from "react";
import "../styles/NavBar.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

import { AppContext } from "../context/AppContext";

export function NavBar({ handleClickMenu }) {
  const { listShopping } = useContext(AppContext);

  const handleClickPage = () => {
    if (handleClickMenu !== false) {
      handleClickMenu();
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-principal">
        <div className="navbar-logo">
          La<span>Tiendita</span>
        </div>
        <div className="navbar-pages">
          <NavLink
            className={`link `}
            to="/Home"
            onClick={() => handleClickPage()}
          >
            Inicio
          </NavLink>
          <NavLink
            className={`link `}
            to="/Accessories"
            onClick={() => handleClickPage()}
          >
            Accesorios
          </NavLink>
          <NavLink
            className={`link `}
            to="/Clothes"
            onClick={() => handleClickPage()}
          >
            Ropa
          </NavLink>

          <NavLink
            className={`link `}
            to="/Footwear"
            onClick={() => handleClickPage()}
          >
            Calzado
          </NavLink>
          <NavLink
            className={`link `}
            to="/Blog"
            onClick={() => handleClickPage()}
          >
            Blog
          </NavLink>

          <NavLink
            className={`link `}
            to="/Contact"
            onClick={() => handleClickPage()}
          >
            Contacto
          </NavLink>
        </div>
        <div className="navbar-additional">
          <NavLink
            className={`link`}
            to="/Search"
            onClick={() => handleClickPage()}
          >
            <AiOutlineSearch className="icon icon-search" />
          </NavLink>
          <NavLink
            className={`link`}
            to="/Login"
            onClick={() => handleClickPage()}
          >
            <AiOutlineUser className="icon icon-user" />
          </NavLink>
          <NavLink
            className={`link`}
            to="/Cart"
            onClick={() => handleClickPage()}
          >
            <AiOutlineShoppingCart className=" icon icon-cart" />
          </NavLink>
          <Link
            className="link shopping-cart-count"
            to="/Cart"
            onClick={() => handleClickPage()}
          >
            {listShopping.length}
          </Link>
        </div>
      </div>
    </div>
  );
}
