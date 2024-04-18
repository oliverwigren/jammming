import React, { useState } from "react";

export const SongsContext = React.createContext();

export const SongsContextArea = ({
  children,
  startValueSearchResults,
  startValuePlaylist,
}) => {

  const [searchResults, setSearchResults] = useState(startValueSearchResults);
  const [playlist, setPlaylist] = useState(startValuePlaylist);

  return (
    <SongsContext.Provider
      value={{
        PL: [playlist, setPlaylist],
        SR: [searchResults, setSearchResults],
      }}
    >
      {children}
    </SongsContext.Provider>
  );
};
