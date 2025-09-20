import React from "react";

export function FilterColor(){

    return(
        <div className="filters-color" name='filters_color'>
          <h2 className="filters-tittle">Color</h2>
          <label>
            <input className="color color-several" type="checkbox" />
            Todos
          </label>
          <label htmlFor="color-black">
            <input
              className="color color-black"
              type="checkbox"
              id="color-black"
            />
            Negro
          </label>
          <label>
            <input className="color color-gray" type="checkbox" />
            Gris
          </label>
          <label>
            <input className="color color-white" type="checkbox" />
            Blanco
          </label>
          <label>
            <input className="color color-brown" type="checkbox" />
            Marron
          </label>
          <label>
            <input className="color color-green" type="checkbox" />
            Verde
          </label>
          <label>
            <input className="color color-red" type="checkbox" />
            Rojo
          </label>
          <label>
            <input className="color color-salmon" type="checkbox" />
            Salmon
          </label>
          <label>
            <input className="color color-yellow" type="checkbox" />
            Amarillo
          </label>
          <label>
            <input className="color color-blue" type="checkbox" />
            Azul
          </label>
          <label>
            <input className="color color-violet" type="checkbox" />
            Violeta
          </label>
        </div>
    )
}