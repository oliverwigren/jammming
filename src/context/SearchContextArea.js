import React from "react";

export const SearchContext = React.createContext();

export const SearchContextArea = ({ children, state }) => {

  return (
    <SearchContext.Provider value={ state }>
      {children}
    </SearchContext.Provider>
  );
};
