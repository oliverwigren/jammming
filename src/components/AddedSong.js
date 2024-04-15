import React, { useState, useContext } from "react";
import styles from "../styles/AddedSong.module.css";
import { SongContext } from "../SongContext";

function AddedSong(props) {
  const [isButtonClick, setButtonClick] = useState(false);

  const handleOnClick = (e) => {
    removeSongFromPlaylist(e);
    setButtonClick(true);
  };

  const { info, setInfo } = useContext(SongContext);

  const removeSongFromPlaylist = ({target}) => {
    // setInfo((prev) => {
    //   prev.filter((song) => {
    //     return song.name === target.value;
    //   })
    // })
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
