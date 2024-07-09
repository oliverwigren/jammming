import React, { useContext } from "react";
import styles from "../styles/SaveToSpotify.module.css";

function SaveToSpotify({ onClick }) {
  return (
    <button onClick={onClick} className={styles.button} type="savetospotify">
      Save To Spotify
    </button>
  );
}

export default SaveToSpotify;
