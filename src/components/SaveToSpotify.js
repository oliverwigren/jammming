import React, { useContext } from "react";
import styles from "../styles/SaveToSpotify.module.css";

function SaveToSpotify({ onClick }) {
  return (
    <button onClick={onClick} className={styles.button} role="submitPlaylist">
      Save To Spotify
    </button>
  );
}

export default SaveToSpotify;
