import React, { useContext } from "react";
import "../styles/Footwear.css";
import { Article } from "../components/Article";
import { AppContext } from "../context/AppContext";
import { Filters } from "../components/Filters";

export function Footwear() {
  const { listArticles } = useContext(AppContext);
  const footwear = listArticles.filter(
    (article) => article.type_article === "footwear"
  );

  return (
    <div className="footwear">
      <div className="footwear-filter">
        <Filters />
      </div>
      <div className="footwear-articles">
        {footwear.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
