import React from "react";
import { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";

export function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [windowMovil, setWindowMovil] = useState(
    window.innerWidth <= 768 ? true : false
  );

  //obteniendo el tamanio de la pantalla del dispositivo
  // const widthWindow =window.innerWidth;

  window.addEventListener("resize", () => {
    window.innerWidth <= 768 ? setWindowMovil(true) : setWindowMovil(false);
  });

  const handleClickMenu = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <>
      {
        //muestra el boton de menu solo si esta en dispositivo movil
        windowMovil ? (
          <>
            <Menu
              showNavigation={showNavigation}
              handleClickMenu={handleClickMenu}
            />
            {showNavigation && <NavBar handleClickMenu={handleClickMenu} />}
          </>
        ) : (
          <NavBar handleClickMenu={false} />
        )
      }
    </>
  );
}
