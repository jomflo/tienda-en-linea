import React, { useContext } from "react";
import "../styles/Contact.css";
import { AppContext } from "../context/AppContext";
import { useState } from "react";

export function Contact() {
  const [message, setMessage] = useState("");
  const {
    contact: {
      name,
      number,
      email,
      affair,
      setName,
      setNumber,
      setEmail,
      setAffair,
    },
  } = useContext(AppContext);

  const setInputs = () => {
    setName("");
    setNumber("");
    setEmail("");
    setAffair("");
    setTimeout(() => { 
      setMessage("");
    }, 6000); //despues de 6 segundos limpiamos el mensaje de exito para que desaparezca el div que lo muestra
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAffair = (e) => {
    setAffair(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      "Hemos recibido su mensaje, pronto nos pondremos en contacto con usted."
    );
    setInputs();
  };

  return (
    <div className="contact">
      <h1>Contactanos</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-message">
          Por favor llene todos los campos del formulario, NOSOTROS nos
          pondremos en contacto con usted lo antes posible.
        </div>
        <div className="contact-form-data">
          <div className="form-data-name">
            <input
              type="text"
              placeholder="Nombre Completo"
              value={name}
              onChange={handleName}
              required
              minLength="3"
            />
          </div>
          <div className="form-data-number">
            <input
              type="text"
              placeholder="Numero de telefono"
              value={number}
              onChange={handleNumber}
              required
              minLength="8"
            />
          </div>
          <div className="form-data-email">
            <input
              type="email"
              placeholder="Correo electronico (opcional)"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="form-data-affair">
            <input
              type="text"
              placeholder="Describa el asunto o motivo de su contacto"
              value={affair}
              onChange={handleAffair}
              required
              minLength="10"
            />
          </div>
          <div className="form-data-button">
            <input type="submit" value="Enviar" />
          </div>
          {message && <div className="form-success">{message}</div>}
        </div>
        <h3>Deja tus mejores huellas con nuestros zapatos</h3>
      </form>
    </div>
  );
}
