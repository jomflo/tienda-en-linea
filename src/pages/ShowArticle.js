import React, {useContext} from "react";
import "../styles/ShowArticle.css";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import {Button} from '../components/Button';
import { AppContext } from "../context/AppContext";

export function ShowArticle() {
  const { listArticles } = useContext(AppContext);
  const { id } = useParams();
  const article= listArticles.find((art)=> {return art.id.toString() === id.toString()}); //buscamos el article por el id que obtuvimos como parametro en la url

const handleGoBack = ()=>{
    window.history.back();
}

const handleBuy= ()=>{
alert(`Usted va a comprar ${article.name}`)
}
  return (
    <>
        <div className="show-article">
        <div className="show-article-back" >
          <abbr title="Regresar"><IoMdArrowRoundBack className="icon-goback" onClick={handleGoBack}/></abbr>
        </div>
        {
        article ? (<div className="show-article-main">
          <div className="show-article-img">
            <img src={article.img} alt={article.name} />
          </div>
          <div className="show-article-detaills">
            <div className="show-article-detaills-name">
              {article.name}
            </div>
            <div className="show-article-detaills-price">
              <div className="price-before">${Math.round(article.price + (article.price*0.20))}.99</div>
              <div className="price-now">${article.price}</div>
            </div>
            <div className="show-article-detaills-size">
              {article.size}
            </div>
            <div className="show-article-detaills-description">
              {article.description}
            </div>
            <div className="btn-buy-article" onClick={handleBuy}>
            <Button text="Comprar"/>
            </div>
          </div>
        </div>)
        :
        <h1>Pagina No encontrada</h1>
      }
      </div>
      
    </>
  );
}
