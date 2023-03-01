import React from "react"; 
import '../styles/Button.css';

export function Button({text}){
    return(
        <div className="button">{text}</div>
    )
}