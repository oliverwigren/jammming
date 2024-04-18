import React from "react";
import styles from "../styles/PlaylistArea.module.css";
import Playlist from "./Playlist";
import SaveToSpotify from "./SaveToSpotify";
import PlaylistName from "./PlaylistName";

function PlaylistArea(props) {
  return (
    <section className={styles.section}>
      <PlaylistName />

      <Playlist />

      <SaveToSpotify />
    </section>
  );
}

export default PlaylistArea;
