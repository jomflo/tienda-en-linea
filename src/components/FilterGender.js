import React from "react";

export function FilterGender(){

    return(
        <div className="filters-preferences">
          <h2 className="filters-tittle">Preferencia</h2>
          <label>
            <input type="checkbox" name="sex" value="dama" /> Dama
          </label>
          <label>
            <input type="checkbox" name="sex" value="caballero" /> Caballero
          </label>
        </div>
    )
}