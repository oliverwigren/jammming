import React from "react";
import styles from "../styles/PlaylistArea.module.css";
import Playlist from "./Playlist";
import PlaylistName from "./PlaylistName";
import SaveToSpotifyContainer from "../containers/SaveToSpotifyContainer";

function PlaylistArea() {
  return (
    <section className={styles.section}>
      <PlaylistName />

      <Playlist />

      <SaveToSpotifyContainer />
    </section>
  );
}

export default PlaylistArea;
