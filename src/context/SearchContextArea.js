import React, { Children, useState } from "react";

export const SearchContext = React.createContext();

export const SearchContextArea = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
