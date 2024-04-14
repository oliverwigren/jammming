import React from "react";
import AddedSong from "./AddedSong";

function Playlist(props) {
  return (
    <div>
      {props.songs.map((song, i) => (
        <AddedSong
          name={song.name}
          artist={song.artist}
          album={song.album}
          key={"playlistSong_" + i}
        />
      ))}
    </div>
  );
}

export default Playlist;
