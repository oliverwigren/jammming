import React, { useState, useContext } from "react";
import styles from "../styles/AddedSong.module.css";
import { SongsContext } from "../context/SongsContextArea";

function AddedSong(props) {

  const { PL } = useContext(SongsContext);
  const [, setPlaylist] = PL;

  const handleOnClick = (e) => {
    removeSongFromPlaylist(props.id);
  };

  const removeSongFromPlaylist = (removeId) => {
    setPlaylist((prev) => {
      return prev.filter(({ id }) => removeId !== id);
    });
  };

  return (
    <div className={styles.div}>
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
