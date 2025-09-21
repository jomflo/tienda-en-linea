import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import {
  AiOutlineWhatsApp, AiOutlinePhone, AiFillMail
} from "react-icons/ai";

export function FooterPage() {
  return (
    <div className="site-footer">
      <nav className="footer-nav">
        <NavLink
          className={`link `}
          to="/politica-privacidad"
        >
          Politica de Privacidad
        </NavLink>
        <NavLink
          className={`link `}
          to="/aviso-afiliados"
        >
          Aviso de Afiliados
        </NavLink>
      </nav>
      <div className="footer-contacto">
      <p>
          <strong> <AiOutlinePhone/> Telefono: </strong>
            <a href="tel:+50581759532"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer">
              +505 8175-9532 
            </a>
          
        </p>
        <p>
          <strong><AiOutlineWhatsApp/> WhatsApp: </strong>
            <a href="https://wa.me/+50581759532" target="_blank"
            rel="nofollow sponsored noopener noreferrer">
              +505 8175-9532 
            </a>
          
        </p>
        <p>
          <strong><AiFillMail/> Email: </strong>
            <a href="mailto:moisesflorez505@gmail.com" target="_blank"
            rel="nofollow sponsored noopener noreferrer">
              moisesflorez505@gmail.com
            </a>
          
        </p>

      </div>
      <p className="footer-copy">&copy; 2025 LaTiendita - Todos los derechos reservados</p>
    </div>
  );
}
