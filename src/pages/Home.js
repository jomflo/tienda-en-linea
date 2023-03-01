import React from "react";
import "../styles/Home.css";
import { Button } from "../components/Button";
import imageModeloHome1 from "../images/modeloHome1.png";
import clothes from "../images/clothes.png";
import arrival1 from "../images/arrival1.png";
import arrival2 from "../images/arrival2.png";
import arrival3 from "../images/arrival3.png";

export function Home() {
  return (
    <div className="home">
      <div className="home-promotion">
        <div className="home-promotion-description">
          <div className="discount">
            Obtener hasta un <span>50</span>% de descuento
          </div>
          <div className="article">En Ropa</div>
          <div className="price">
            A Partir de <span> $99</span>
            <span>99</span>
          </div>
          <div className="shop-now">
            <Button text="Comprar Ahora" />
          </div>
        </div>
        <div className="home-promotion-image">
          <img src={imageModeloHome1} alt="" />
        </div>
      </div>
      <div className="home-arrival">
        <div className="home-arrival-tittle">
          <h1>Nueva Llegada</h1>
        </div>
        <div className="home-arrival-products">
          <div className="product-arrival">
            <img src={clothes} alt="new arrivals clothes" />
            <div className="detaills">
              <p className="product-arrival-name">Vestido Rosa Rosa</p>
              <p className="product-arrival-price">$99.99</p>
            </div>
          </div>
          <div className="product-arrival">
            <img src={arrival1} alt="new arrivals clothes" />
            <div className="detaills">
              <p className="product-arrival-name">Vestido Rosa Rosa</p>
              <p className="product-arrival-price">$99.99</p>
            </div>
          </div>
          <div className="product-arrival">
            <img src={clothes} alt="new arrivals clothes" />
            <div className="detaills">
              <p className="product-arrival-name">Vestido Rosa Rosa</p>
              <p className="product-arrival-price">$99.99</p>
            </div>
          </div>
          <div className="product-arrival">
            <img src={arrival2} alt="new arrivals clothes" />
            <div className="detaills">
              <p className="product-arrival-name">Vestido Rosa Rosa</p>
              <p className="product-arrival-price">$99.99</p>
            </div>
          </div>
          <div className="product-arrival">
            <img src={clothes} alt="new arrivals clothes" />
            <div className="detaills">
              <p className="product-arrival-name">Vestido Rosa Rosa</p>
              <p className="product-arrival-price">$99.99</p>
            </div>
          </div>
          <div className="product-arrival">
            <img src={arrival3} alt="new arrivals clothes" />
            <div className="detaills">
              <p className="product-arrival-name">Vestido Rosa Rosa</p>
              <p className="product-arrival-price">$99.99</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
