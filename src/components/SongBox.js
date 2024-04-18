import React, { useContext } from "react";
import styles from "../styles/SongBox.module.css";
import { SongsContext } from "../context/SongsContextArea";

function SongBox(props) {
  const { PL } = useContext(SongsContext);
  const [, setPlaylist] = PL;

  // const handleOnClick = () => {
  //   setPlaylist((prev) => {
  //     return [{ album: "Water", name: "Hello", artist: "Adele" }, ...prev];
  //   });
  // };

  const handleOnClick = () => {
    setPlaylist((prev) => {
      return [{ album: props.album, name: props.name, artist: props.artist }, ...prev];
    });
  };


  return (
    <div className={styles.div}>
      <b className={styles.b}>{props.name}</b>
      <p className={styles.desc}>
        <span>{props.artist}</span> - <span>{props.album}</span>
      </p>
      <button onClick={handleOnClick} className={styles.button}>
        +
      </button>
    </div>
  );
}

export default SongBox;
