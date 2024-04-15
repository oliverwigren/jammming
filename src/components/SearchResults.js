import React, { useContext, useEffect } from "react";
import SongBox from "./SongBox";
import { SongsContext } from "../context/SongsContextArea";

function SearchResults() {
  // const addToPlaylist = ({target}) => {
  //   setPlaylist((prev) => [prev..., target.value])
  // }

  const { SR } = useContext(SongsContext);
  const [searchResults] = SR;

  return (
    <>
      {searchResults.map((song, i) => (
        <SongBox
          artist={song.artist}
          name={song.name}
          album={song.name}
          key={"searchSong_" + i}
        />
      ))}
    </>
  );
}

export default SearchResults;
