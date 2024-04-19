import React, { useContext } from "react";
import styles from "../styles/SaveToSpotify.module.css";
//import { SongsContext } from "../context/SongsContextArea";

function SaveToSpotify({onClick}) {
  return (
    <button onClick={onClick} className={styles.button}>
      Save To Spotify
    </button>
  );
}

export default SaveToSpotify;
