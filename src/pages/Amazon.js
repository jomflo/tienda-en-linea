import React from "react";
import "../styles/Amazon.css";
import imagenfondo from "../images/zapatos10.webp";
import clothes from "../images/clothes.webp";
import arrival2 from "../images/arrival2.webp";
import {
  AiOutlineWhatsApp, AiOutlineAmazon, AiOutlinePhone, AiFillFacebook
} from "react-icons/ai";


export function Amazon() {
  return (
    <div className="home">
      <div className="home-promotion">
        <div className="amazon-promotion-description">
          <div className="shop-now">
            {/* Inicio de seccion de publicidad inicia de amazon  */}
            <div className="container-publicidad-amazon">
              <div className="anuncio-amazon">
                ¿Estas buscando los mejores productos? Encuentra <strong>Ropa, calzado, accesorios y todo lo que necesitas </strong> directamente en Amazon <br />
                <a id="link-text-amazon"
                  href="https://amzn.to/4mtw5gO"
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer">
                  Haz Clic aqui para comprar en Amazon <AiOutlineAmazon id="icon-text-amazon" />
                </a>
              </div>

              <div className="container-publicidad">
                <a className="button btn-amazon" href='https://amzn.to/4mtw5gO'><span id="btn-text-amazon">Amazon</span ><AiOutlineAmazon /></a>
                <a className="button btn-agencia" href='https://wa.me/+50588348124'>
                  <span id="btn-text-agencia">Agencia </span>
                  <AiOutlineWhatsApp />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-promotion-image">
          <img src={imagenfondo} alt="" />
        </div>
      </div>
      {/* Fin de seccion de publicidad inicia de amazon  */}
      <div className="container-productos-amazon">
        <h2>Productos mas vendidos en Amazon <AiOutlineAmazon id="icon-text-amazon" />: </h2>
        <div className="container-productos-amazon-link">
          <a
            href="https://amzn.to/47U7xKn"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >Ropa</a>
          <a
            href="https://amzn.to/4nKQvDe"
            rel="nofollow sponsored noopener noreferrer"
            target="_blank"
          >Zapatos</a>
          <a
            href="https://amzn.to/3KdU2vl"
            rel="nofollow sponsored noopener noreferrer"
            target="_blank"
          >Relojes</a>
          <a
            href="https://amzn.to/3lyxHrj"
            rel="nofollow sponsored noopener noreferrer"
            target="_blank"
          >Pulseras</a>
          <a
            href="https://amzn.to/4moolHp"
            rel="nofollow sponsored noopener noreferrer"
            target="_blank"
          >Productos de belleza</a>
          <a
            href="https://amzn.to/3KkDAJD"
            rel="nofollow sponsored noopener noreferrer"
            target="_blank"
          >Herramientas</a>
        </div>
      </div>
      {/* Inicio de Seccion de agencia de encomienda */}
      <section className="envios-section">

        <h2 id="texto-publicidad-agencia">Recuerda que Agencia de Encomiendas <span id="span-agencia-usa">USA</span> <span id="span-agencia-ship">Ship</span> <span>te trae tus encomienda hasta la puerta de tu casa</span></h2>

        <p>Consulta los precios de envio y contactanos para mas informacion.</p>
        {/* Inicio de seccion de tabla de tarifas de agencia de encomiendas */}
        <div className="tabla-container">
          <table className="table border tabla-envios">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Via</th>
                <th scope="col">Costo/libra</th>
                <th scope="col">Tiempo de Entrega</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th>Aerea</th>
                <th>$7.50</th>
                <th>7 dias</th>
              </tr>
              <tr>
                <th scope="row">2</th>
                <th>Maritima</th>
                <th>$3.00</th>
                <th>30 dias</th>
              </tr>
            </tbody>

          </table>
        </div>
        {/* Fin de seccion de tabla de tarifas de agencia de encomiendas */}
        {/* Inicio de contactos-envios */}
        <div className="contacto-envios">
          <h3>Contactar con la Agencia</h3>
          <p><strong><AiOutlinePhone />
            <a href='tel:+50578787884'
              target="_blank"
              rel="nofollow sponsored noopener noreferrer">
              +505 7878-7884
            </a>
          </strong>
          </p>
          <p><strong><AiOutlineWhatsApp />
            <a href='https://wa.me/+50588348124'
              target="_blank"
              rel="nofollow sponsored noopener noreferrer">
              WhatsApp
            </a>
          </strong>
          </p>
          <p><strong><AiFillFacebook />
            <a href='www.facebook.com/usashipnicaragua'
              target="_blank"
              rel="nofollow sponsored noopener noreferrer">
               Facebook
            </a>
          </strong>
          </p>

        </div>
      </section>
      {/* Fin de contactos envios */}
      <div className="home-arrival">
        <div className="home-arrival-tittle">
          <h1>Nueva Llegada</h1>
        </div>
        <div className="home-arrival-products">
          <div className="product-arrival">
            <img src={clothes} alt="new arrivals clothes" />
            <div className="detaills">
              <p className="product-arrival-name">Vestido Rosa Rosa</p>
              <p className="product-arrival-price">$49.99</p>
            </div>
          </div>
          <div className="product-arrival">
            <img src={arrival2} alt="new arrivals clothes" />
            <div className="detaills">
              <p className="product-arrival-name">Vestido Rosa Rosa</p>
              <p className="product-arrival-price">$49.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
