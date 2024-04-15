import React, { useContext } from "react";
import AddedSong from "./AddedSong";
import { PlaylistSongContext } from "../context/PlaylistSongContextArea";

function Playlist(props) {
  const { playlist } = useContext(PlaylistSongContext);

  return (
    <div>
      {playlist.map((song, i) => (
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
