import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navigation.css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Search } from "../Search";

export function Navigation() {
  const [linkActived, setlinkActived] = useState("home");
  const [showSearch, setShowSearch] = useState(false);

  const handleActive = (link) => {
    setlinkActived(link);
  };
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="navigation">
      <div className="navigation-principal">
        <div className="navigation-logo">
          fa<span>show</span>
        </div>
        <div className="navigation-pages">
          <Link
            className={`link ${linkActived === "home" ? "active" : ""}`}
            to="/Home"
            onClick={() => handleActive("home")}
          >
            Inicio
          </Link>
          <Link
            className={`link ${linkActived === "accessories" ? "active" : ""}`}
            to="/Accessories"
            onClick={() => handleActive("accessories")}
          >
            Accesorios
          </Link>
          <Link
            className={`link ${linkActived === "clothes" ? "active" : ""}`}
            to="/Clothes"
            onClick={() => handleActive("clothes")}
          >
            Ropa
          </Link>

          <Link
            className={`link ${linkActived === "footwear" ? "active" : ""}`}
            to="/Footwear"
            onClick={() => handleActive("footwear")}
          >
            Calzado
          </Link>
          <Link
            className={`link ${linkActived === "blog" ? "active" : ""}`}
            to="/Blog"
            onClick={() => handleActive("blog")}
          >
            Blog
          </Link>

          <Link
            className={`link ${linkActived === "contact" ? "active" : ""}`}
            to="/Contact"
            onClick={() => handleActive("contact")}
          >
            Contacto
          </Link>
        
         
          
        </div>
        <div className="navigation-additional">
        {
            !showSearch &&(
             <Link
              className={`link icon icon-search ${linkActived === "search" ? "active" : ""}`}
              onClick={handleSearch}
            >
               <BsSearch  onClick={handleSearch}/>
            </Link> 
            )
          }
            <Link
            className={`link icon icon-user ${linkActived === "user" ? "active" : ""}`}
            to="/Login"
            onClick={() => handleActive("user")}
          >
            <AiOutlineUser/>
          </Link>
        <Link
            className={`link icon icon-shopping ${
              linkActived === "shoppingcart" ? "active" : ""
            }`}
            to="/ShoppingCart"
            onClick={() => handleActive("shoppingcart")}
          >
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
      {showSearch && (
        <div className="navigation-search">
          <Search  handleCloseSearch={handleSearch}/>
        </div>
      )}
    </div>
  );
}
