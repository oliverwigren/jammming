import React, { useState } from "react";
import styles from "../styles/AddedSong.module.css";

function AddedSong(props) {
  const [isButtonClick, setButtonClick] = useState(false);

  const handleOnClick = () => {
    setButtonClick(true);
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
