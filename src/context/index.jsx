import React from "react";
import MenuContextProvider from "./menu-context";

const Context = ({ children }) => {
  return <MenuContextProvider>{children}</MenuContextProvider>;
};

export default Context;
