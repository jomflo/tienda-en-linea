import React from "react";
import { useState } from "react";

export function FilterPrice(){
  const [price, setPrice] = useState(100);

  const handleChangePriceRange = (e) => {
    setPrice(e.target.value);
  };

    return(
        <div className="filters-price">
          <h2 className="filters-tittle">Precio </h2>
          <input
            type="range"
            min="10"
            max="400"
            step="10"
            value={price}
            name="price"
            multiple
            onChange={handleChangePriceRange}
          ></input>
          <div className="price-range">
            <label htmlFor="price">$10</label>
            <label htmlFor="price">${price}</label>
          </div>
        </div>
    )
}

