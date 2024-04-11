import React from "react";
import SongBox from "./SongBox";

function SearchResults() {

  const addToPlaylist = ({target}) => {
    //setPlaylist((prev) => [prev..., target.value])
  } 

  //Array.forEach
  return (
    <>
      <SongBox addToPlaylist={addToPlaylist} artist="Eminem" name="Careful what you wish for" />
      <SongBox addToPlaylist={addToPlaylist} artist="Kent" name="Svart snö" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einer" name="Gäng" />
    </>
  );
}

export default SearchResults;
