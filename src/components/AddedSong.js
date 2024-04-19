import React, { useState, useContext } from "react";
import styles from "../styles/AddedSong.module.css";
import { PlaylistSongContext } from "../context/PlaylistSongContextArea";
import { SongsContext } from "../context/SongsContextArea";

function AddedSong(props) {
  const [isButtonClick, setButtonClick] = useState(false);

  const handleOnClick = (e) => {
    removeSongFromPlaylist(e);
    setButtonClick(true);
  };

  const { PL } = useContext(SongsContext);
  const [playlist, setPlaylist] = PL;

  const removeSongFromPlaylist = ({ target }) => {
    setPlaylist((prev) => {
      prev.filter(({ id }) => props.id !== id);
    });
  };

  return (
    <div className={isButtonClick ? styles.RemoveDiv : styles.div}>
      <button className={styles.button} onClick={handleOnClick}>
        -
      </button>
      <b className={styles.b}>{props.name}</b>
      <p className={styles.desc}>
        <span>{props.artist}</span> - <span>{props.album}</span>
      </p>
    </div>
  );
}

export default AddedSong;
