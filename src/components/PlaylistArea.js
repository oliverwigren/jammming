import React from "react";
import styles from '../styles/PlaylistArea.module.css';
import Playlist from './Playlist'

function PlaylistArea() {
  return (
    <section className={styles.section}>
      <p>Playlist</p>
      <Playlist songs={['hello', 'no', 'cunt']} />
    </section>
  );
}

export default PlaylistArea;