import React from "react";
import styles from '../styles/SongBox.module.css';

function SongBox(props) {
    return (
        <div className={styles.div}>
            <b className={styles.b}>{props.name}</b>
            <p className={styles.desc}>
                <span>{props.artist}</span>
            </p>
        </div>
    )
}

export default SongBox;