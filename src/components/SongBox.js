import React, { useContext } from "react";
import styles from "../styles/SongBox.module.css";
import { SongsContext } from "../context/SongsContextArea";

function SongBox(props) {
  const { PL } = useContext(SongsContext);
  const [playlist, setPlaylist] = PL;

  const isSongInPlaylist = playlist.some(song => song.id === props.id);

  const handleOnClick = () => {
    // Checks if song already exists in playlist
    

    if (!isSongInPlaylist) {
      setPlaylist((prev) => {
        return [
          {
            album: props.album,
            name: props.name,
            artist: props.artist,
            id: props.id,
          },
          ...prev,
        ];
      });
    }
  };

  return (
    <div className={styles.div}>
      <b className={styles.b}>{props.name}</b>
      <p className={styles.desc}>
        <span>{props.artist}</span> - <span>{props.album}</span>
      </p>
      <button onClick={handleOnClick} className={styles.button}>
        {isSongInPlaylist ? 'A' : '+'}
      </button>
    </div>
  );
}

export default SongBox;
