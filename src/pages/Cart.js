import React, {useContext} from "react";
import "../styles/Cart.css";
import { Article } from "../components/Article";
import { AppContext } from "../context/AppContext";

export function Cart() {
  const { listShopping } = useContext(AppContext);

  return (
    <div className="cart">
      {listShopping.length>0 ? (listShopping.map((article) => (
        <Article key={article.id} 
        article={article}
        add={false}/>
      ))) : <h1>Carrito de Compras Vacio</h1>
    }
    </div>
  );
}
