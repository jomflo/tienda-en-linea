import React, { createContext, useState } from "react";
import { listArticles } from "../Data/listArticles";
import { listShoppingCart } from "../Data/listShoppingCart";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [affair, setAffair] = useState("");
  const [search, setSearch] = useState('');
  //
  const [listShopping, setListShopping] = useState(listShoppingCart);

  const contact = {
    name,
    number,
    email,
    affair,
    setName,
    setNumber,
    setEmail,
    setAffair,
  };

  return (
    <AppContext.Provider
      value={{
        contact: contact,
        listArticles: listArticles,
        listShopping: listShopping,
        setListShopping:setListShopping,
        search: search,
        setSearch: setSearch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
