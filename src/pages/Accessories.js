import React, { useContext } from "react";
import "../styles/Accessories.css";
import { Article } from "../components/Article";
import { AppContext } from "../context/AppContext";

export function Accessories() {
  const {listArticles}= useContext(AppContext);
  const footwear = listArticles.filter(article=> article.type_article ==="accessories");

  return (
    <div className="accessories">
     {
      footwear.map((article)  =>(
        <Article key={article.id}
        article={article}
        />
      ))
      }
    </div>
  );
}


