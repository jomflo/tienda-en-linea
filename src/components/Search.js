import React from "react";
import '../styles/Search.css';
import {AiFillCloseCircle} from 'react-icons/ai'

export function Search({handleCloseSearch}){

const handleClose=()=>{
    handleCloseSearch();
}

    return(
        <div className="search">
            <input
             className="search-input"
              type="search"
              placeholder="Search Product"
               maxLength={40} >
            </input>
            <AiFillCloseCircle className="icon-close" onClick={handleClose}/>
        </div>
    )
}