import React, { useContext } from "react";
import styles from "../styles/SongBox.module.css";
import { SongsContext } from "../context/SongsContextArea";

function SongBox(props) {
  const { PL } = useContext(SongsContext);
  const [playlist, setPlaylist] = PL;

  const handleOnClick = () => {
    // Checks if song already exists in playlis
    let songAlreadyExists = false;

    playlist.forEach((song) => {
      if (song.id === props.id) {
        songAlreadyExists = true;
        return;
      }
    });

    if (!songAlreadyExists) {
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
        + {/* Check if in playlist, if so change + to a check mark */}
      </button>
    </div>
  );
}

export default SongBox;
