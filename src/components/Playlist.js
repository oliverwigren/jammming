import React, { useContext } from "react";
import AddedSong from "./AddedSong";
import { SongsContext } from "../context/SongsContextArea";

function Playlist() {
  const { PL } = useContext(SongsContext);
  const [playlist] = PL;

  return (
    <div style={{ minHeight: 250 }}>
      {playlist.map((song, i) => (
        <AddedSong
          name={song.name}
          artist={song.artist}
          album={song.album}
          key={"playlistSong_" + i}
          id={song.id}
          uri={song.uri}
        />
      ))}
    </div>
  );
}

export default Playlist;
