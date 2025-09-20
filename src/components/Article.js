import React, { useContext, useState } from "react";
import "../styles/Article.css";
import {useNavigate} from 'react-router-dom';
import { Button } from "../components/Button";
import { AiFillDelete, AiOutlineLoading} from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AppContext } from "../context/AppContext";


export function Article({ article}) {

  const { listShopping, setListShopping } = useContext(AppContext);
  const [trasladarImg, setTrasladarImg ]= useState(false);
  const [loaded, setLoaded ]= useState(false);
  const navigate = useNavigate();

  let imagenTrasladar=article.img;

  const handleAddShoppingCart = (e) => {
    if (exist) { 
     // si el articulo esta en el carrito entonces lo quitamos
      // aqui nos retornara el mismo arreglo , pero sin el articulo que se ha seleccionado para quitar del carrito
      setListShopping(listShopping.filter((art) => art.id !== article.id)); 
      setTrasladarImg(false);
     
    } else { // si el articulo no esta en el carrito entonces lo agregamos
      setListShopping([article, ...listShopping]);
      setTrasladarImg(true);
    }
  };

  //Validamos si este articulo ya esta en el carrito de compras
    const exist = listShopping.some((art)=> art.id === article.id);

    const handleShowArticle=()=>{
      return (
        navigate(`/Article/${article.id}`)
      )
   };

   const handleBuy=()=>{
  
   }

   const handleLoadImg=()=>{
    setLoaded(true)
   }

  return (
    <div className="article">
      { trasladarImg &&
        <img className="trasladarImg" src={imagenTrasladar} alt=" Article"/>
        }
      <div className="article-icon">
        {!exist ? (
          <abbr title="Agregar al Carrito"> 
            <BsFillCartPlusFill
              className="article-icon-cart"
              onClick={handleAddShoppingCart}
            />
          </abbr>
        ) : (
          <abbr title="Eliminar del Carrito">
            <AiFillDelete
              className="article-icon-cart article-delete-cart"
              onClick={handleAddShoppingCart}
            />
          </abbr>
        )}
      </div>
      
      <div className={`article-img article-${article.type_article}`} >
        {
          !loaded && <div className="container-spinner"><AiOutlineLoading className="spinner"/></div>
        }
        <img
            className={!loaded ? 'img loading' : ''}
            src={article.img}
              alt={article.name}
              onLoad={handleLoadImg}
              onClick={handleShowArticle}
        />
      </div>
      <div className="article-detaills">
        <div className="article-name">{article.name}</div>
        <div className="article-price">${article.price}</div>
        <div className="btn-shop" onClick={handleBuy}>
          <Button text="Comprar" />
        </div>
      </div>
    </div>
   
  );
}
