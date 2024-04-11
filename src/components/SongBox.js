import React from "react";
import styles from '../styles/SongBox.module.css';

function SongBox(props) {
    return (
        <div className={styles.div}>
            <b className={styles.b}>{props.name}</b>
            <p className={styles.desc}>
                <span>{props.artist}</span>
            </p>
            <button onClick={props.addToPlaylist}>Add To Playlist</button>
        </div>
    )
}

export default SongBox;