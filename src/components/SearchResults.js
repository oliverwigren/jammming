import React, { useContext, useEffect } from "react";
import SongBox from "./SongBox";
import { SongsContext } from "../context/SongsContextArea";

function SearchResults() {

  const { SR, SVT } = useContext(SongsContext);
  //TODO: Correct variables
  //const token = useContext(SongsContext);
  const [searchResults] = SR;
  const [startValueSearchResults] = SVT


  return (
    <>
      {startValueSearchResults.map((song, i) => (
        <SongBox
          artist={song.artist}
          name={song.name}
          album={song.album}
          key={"searchSong_" + i}
          id={song.id}
          uri={song.uri}
          // [song.artist, song.name, song.album]}
        />
      ))}
    </>
  );
}

export default SearchResults;
