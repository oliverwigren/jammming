import React, { useContext } from "react";
import AddedSong from "./AddedSong";
import { SongContext } from "../SongContext";

function Playlist(props) {
  const { info } = useContext(SongContext);

  return (
    <div>
      {info.map((song, i) => (
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
