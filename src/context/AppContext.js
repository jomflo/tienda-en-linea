import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const contact = {
    name,
    email,
    comment,
    setName,
    setEmail,
    setComment,
  };

  return (
    <AppContext.Provider
      value={
        {
        contact:contact
       }
    }
    >
      {props.children}
    </AppContext.Provider>
  );
}
