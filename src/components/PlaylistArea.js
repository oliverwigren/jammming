import React from "react";
import styles from '../styles/PlaylistArea.module.css';
import Playlist from './Playlist'

function PlaylistArea(props) {
  return (
    <section className={styles.section}>
      <p>Playlist</p>
      <Playlist  />

    
    </section>
  );
}

export default PlaylistArea;