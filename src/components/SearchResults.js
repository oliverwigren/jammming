import React from "react";
import SongBox from "./SongBox";

function SearchResults(props) {

  // const addToPlaylist = ({target}) => {
  //   setPlaylist((prev) => [prev..., target.value])
  // } 

  return (
    <>
      {props.songs.map((song, i) => (
        <SongBox artist={song.artist} name={song.name} album={song.name} key={'searchSong_'+i} />
      ))}
      
    </>
  );
}

export default SearchResults;
