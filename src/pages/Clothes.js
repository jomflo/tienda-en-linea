import React, { useContext } from "react";
import "../styles/Clothes.css";
import { Article } from "../components/Article";
import { AppContext } from "../context/AppContext";

export function Clothes() {
  const { listArticles } = useContext(AppContext);
  const footwear = listArticles.filter(
    (article) => article.type_article === "clothes"
  );

  return (
    <div className="clothes">
      {footwear.map((article) => (
        <Article
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
}
