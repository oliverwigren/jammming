import React from "react";
import styles from '../styles/AddedSong.module.css'

function AddedSong(props) {
    return (
        <div className={styles.div}>
            <b className={styles.b}>{props.name}</b>
            <p className={styles.desc}>
                <span>{props.artist}</span> - <span>{props.album}</span>
            </p>
            <button className={styles.button} onClick={props.addToPlaylist}>-</button>
        </div>
    )
}

export default AddedSong;