import React, { useState } from "react";

export const SongsContext = React.createContext();

export const SongsContextArea = ({
  children,
  startValueSearchResults,
  startValuePlaylist,
  name,
  setName,
  token,
}) => {

  const [searchResults, setSearchResults] = useState(startValueSearchResults);
  const [playlist, setPlaylist] = useState(startValuePlaylist);

  return (
    <SongsContext.Provider
      value={{
        PL: [playlist, setPlaylist],
        SR: [searchResults, setSearchResults],
        PN: [name, setName],
        AT: [token],
        SVT: [startValueSearchResults]
      }}
    >
      {children}
    </SongsContext.Provider>
  );
};
