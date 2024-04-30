import React, { useContext, useEffect } from "react";
import SongBox from "./SongBox";
import { SongsContext } from "../context/SongsContextArea";

function SearchResults() {
  // const addToPlaylist = ({target}) => {
  //   setPlaylist((prev) => [prev..., target.value])
  // }

  const { SR, SVT } = useContext(SongsContext);
  //const token = useContext(SongsContext);
  const [searchResults] = SR;
  const [startValueSearchResults] = SVT

  // const handleOnClick = ({ artist, name, album }) => {
  //   setPlaylist((prev) => {
  //     return [{ album: album, name: name, artist: artist }, ...prev];
  //   });
  // };

  return (
    <>
      {startValueSearchResults.map((song, i) => (
        <SongBox
          artist={song.artist}
          name={song.name}
          album={song.album}
          key={"searchSong_" + i}
          id={song.id}
          // [song.artist, song.name, song.album]}
        />
      ))}
    </>
  );
}

export default SearchResults;
