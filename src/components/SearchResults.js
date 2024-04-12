import React from "react";
import SongBox from "./SongBox";

function SearchResults() {

  const addToPlaylist = ({target}) => {
    //setPlaylist((prev) => [prev..., target.value])
  } 

  //Array.forEach
  return (
    <>
      <SongBox addToPlaylist={addToPlaylist} artist="Eminem" name="Careful what you wish for" album="MNM"/>
      <SongBox addToPlaylist={addToPlaylist} artist="Kent" name="Svart snö" album="Solen Skiner" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einar" name="Gäng" album="NS1" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einar" name="Gäng" album="NS1" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einar" name="Gäng" album="NS1" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einar" name="Gäng" album="NS1" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einar" name="Gäng" album="NS1" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einar" name="Gäng" album="NS1" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einar" name="Gäng" album="NS1" />
      <SongBox addToPlaylist={addToPlaylist} artist="Einar" name="Gäng" album="NS1" />
    </>
  );
}

export default SearchResults;
