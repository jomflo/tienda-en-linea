import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from "react";
import { useEffect } from "react";

export function Login() {
  const [isRequerid, setIsRequerid] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //controlamos todos los imputs como usuario, contrasenia , email y telefono
  const [inputs, setInput] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  //actualizar los datos ingresado en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    isLogin ? login() : signIn();
  };

  const login = async () => {
    try {
      let accessed = false;
      //hacemos la peticion para obtener los usuarios
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      accessed = json.some((user) => {
        return user.username.toString() === inputs.username; // verificamos que el usuario existe
      });
      //si el usuario existe entonces limpiamos los errores y sino le mostramos que los datos son incorrrecto
      accessed ? (navigate("/Home")) : ( setError("Acceso Denegado, Datos Incorrectos."));
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    try{
     const response=  await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          name: inputs.username,
          username: inputs.username,
          email: inputs.email,
          phone: inputs.phone,
          
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      // const json = await response.json();
      // console.log(json);
      
          setError("LaTiendita le da la Bienvenida estimado usuario.")
          navigate("/Home");
    }
    catch{
      setError(error.toString());
    }finally {
    setLoading(false);
  }
    
  };
  
  useEffect (() => {
    error &&
    setTimeout(() => {
      setError("");
    }, 4000);
  }, [error]);

  //cuando se selleciona la opcionde loguearse o crear una nueva cuenta
  const handleOption=(required,login)=>{
    setError("");
    setIsRequerid(required);
    setIsLogin(login);
  }

  return (
    <div className="login">
      <h1>Bienvenido a LaTiendita</h1>
      <form onSubmit={handleSubmit} className="login-form" autocomplete="off">
        <div className="contact-option">
          <div
            className={`option-login${isLogin ? " option-active" : ""}`}
            onClick={()=>handleOption(false,true)}
          >
            Acceder
          </div>
          <div
            className={`option-sign-in${isLogin ? "" : " option-active"}`}
            onClick={()=>handleOption(true,false)}
          >
            Registrate
          </div>
        </div>
        <div className="login-form-data">
          <div className="form-data-user">
            <FaUserCircle />
            <input
              type="text"
              name="username"
              value={inputs.username}
              placeholder={`Usuario ${isRequerid ? "(requerido)" : ""}`}
              required={isRequerid}
              onChange={handleChange}
            />
          </div>
          <div className="form-data-password">
            <RiLockPasswordFill />
            <input
              type="password"
              name="password"
              value={inputs.password}
              autocomplete="new-password"
              placeholder={`Contraseña ${isRequerid ? "(requerido)" : ""}`}
              required={isRequerid}
              onChange={handleChange}
            />
          </div>
          {!isLogin && (
            <>
              <div className="form-data-phone">
                <AiFillPhone />
                <input
                  type="text"
                  name="phone"
                  value={inputs.phone}
                  placeholder="Numero de telefono"
                  onChange={handleChange}
                />
              </div>
              <div className="form-data-email">
                <MdEmail />
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  placeholder="Correo electronico (requerido)"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-data-address">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  name="address"
                  value={inputs.email}
                  placeholder="Direccion (requerido)"
                  required
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          {error && (
            <>
              <div className="div-error">{error}</div>
            </>
          )}

          <div className="form-data-button">
            <button type="submit">
              {loading ? <AiOutlineLoading className="spinner" /> : "Continuar"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
