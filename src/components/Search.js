import React, { useContext } from "react";
import "../styles/Search.css";
import { AppContext } from "../context/AppContext";
import { Article } from "./Article";
import { useState } from "react";
import { useEffect } from "react";

export function Search() {
  const { listArticles, search, setSearch } = useContext(AppContext);
  const [result, setResult] = useState([]);

  
  const searchArticle=()=>{
    if(search.trim()){
      const resultSearch = listArticles.filter((article) => {
        return (
          article.name.toLowerCase().includes(search.trim()) ||
          article.description.toLowerCase().includes(search.trim())
        );
      });
      setResult(resultSearch);
    }else{
      setResult([]);
    }
    
  };

  useEffect(()=>{
searchArticle();
  },[search])

  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="search"
          placeholder="Escriba nombre o descripción del articulo"
          value={search}
          maxLength={40}
          onChange={handleChange}
        ></input>
      </div>
      <div className="search-result">
        {result.length > 0 ? (
          result.map((article) => (
            <Article key={article.id} article={article} />
          ))
        ) : ( !search.trim() ? (<h1>Buscar Articulos</h1>) :
          <h1>Sin Resultados</h1>
        )}
      </div>
    </div>
  );
}
