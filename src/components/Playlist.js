import React, { useContext } from "react";
import AddedSong from "./AddedSong";
import { PlaylistSongContext } from "../context/PlaylistSongContextArea";
import { SongsContext } from "../context/SongsContextArea";

function Playlist(props) {
  const { PL } = useContext(SongsContext);
  const [playlist] = PL;


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
