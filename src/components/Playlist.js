import React from "react";
import AddedSong from "./AddedSong";

function Playlist(props) {
  return (
    <div>
      {props.songs.map((song) => (
        <AddedSong />
      ))}
    </div>
  );
}

export default Playlist;
