import React, { useState } from "react";

export const SongContext = React.createContext();

export const SongContextArea = ({ children, startValue }) => {
  const [info, setInfo] = useState(startValue);
  return (
    <SongContext.Provider value={{ info, setInfo }}>
      {children}
    </SongContext.Provider>
  );
};
