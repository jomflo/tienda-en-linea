import React from "react";

export function FilterSize(){

    const handleClickSize = (e) => {
        e.target.style.backgroundColor =
          e.target.style.backgroundColor === "indigo" ? "transparent" : "indigo";
      };


      
    return(
        <div className="filters-size" id="toppings">
          <h2 className="filters-tittle">Tallas</h2>
          <div className="size" onClick={handleClickSize}>
            20
          </div>
          <div className="size" onClick={handleClickSize}>
            21
          </div>
          <div className="size" onClick={handleClickSize}>
            22
          </div>
          <div className="size" onClick={handleClickSize}>
            23
          </div>
          <div className="size" onClick={handleClickSize}>
            24
          </div>
          <div className="size" onClick={handleClickSize}>
            25
          </div>
          <div className="size" onClick={handleClickSize}>
            26
          </div>
          <div className="size" onClick={handleClickSize}>
            27
          </div>
          <div className="size" onClick={handleClickSize}>
            28
          </div>
          <div className="size" onClick={handleClickSize}>
            29
          </div>
          <div className="size" onClick={handleClickSize}>
            30
          </div>
          <div className="size" onClick={handleClickSize}>
            31
          </div>
          <div className="size" onClick={handleClickSize}>
            32
          </div>
          <div className="size" onClick={handleClickSize}>
            33
          </div>
          <div className="size" onClick={handleClickSize}>
            34
          </div>
          <div className="size" onClick={handleClickSize}>
            35
          </div>
          <div className="size" onClick={handleClickSize}>
            36
          </div>
          <div className="size" onClick={handleClickSize}>
            37
          </div>
          <div className="size" onClick={handleClickSize}>
            38
          </div>
          <div className="size" onClick={handleClickSize}>
            39
          </div>
          <div className="size" onClick={handleClickSize}>
            40
          </div>
          <div className="size" onClick={handleClickSize}>
            41
          </div>
          <div className="size" onClick={handleClickSize}>
            42
          </div>
          <div className="size" onClick={handleClickSize}>
            43
          </div>
          <div className="size" onClick={handleClickSize}>
            44
          </div>
        </div>
    )
}