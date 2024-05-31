import React, { useContext, useEffect } from "react";
import SongBox from "./SongBox";
import { SongsContext } from "../context/SongsContextArea";

function SearchResults() {
  const { SR } = useContext(SongsContext);
  const [searchResults, setSearchResults] = SR;

  return (
    <>
      {searchResults.map((song, i) => (
        <SongBox
          artist={song.artist}
          name={song.name}
          album={song.album}
          key={"searchSong_" + i}
          id={song.id}
          uri={song.uri}
        />
      ))}
    </>
  );
}

export default SearchResults;
