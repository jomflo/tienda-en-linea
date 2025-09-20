import React from "react";
import "../styles/Filters.css";
import { useState } from "react";
import { FilterPrice } from "./FilterPrice";
import { FilterColor } from "./FilterColor";
import { FilterSize } from "./FilterSize";
import { FilterGender } from "./FilterGender";

export function Filters() {
    const [showFilter, setShowFilter] = useState(false);

    const handleClickFilter=()=>{
        setShowFilter(!showFilter);
    }
  return (
    <div className="filters">
      <div className="filters-btn">
        <div className="filters-btn-filter" onClick={handleClickFilter}>
        Filtrar
        </div>
    </div>
    {
        showFilter && (<div className="filters-group">
        <FilterPrice/>
        <FilterSize />
        <FilterColor/>
        <FilterGender/>
      </div>)
    }
      
    </div>
  );
}
