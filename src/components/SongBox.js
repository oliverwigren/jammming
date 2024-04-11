import React from "react";
import styles from '../styles/SongBox.module.css';

function SongBox(props) {
    return (
        <div className={styles.div}>
            <b className={styles.b}>{props.title}</b>
            <p>
                <span>{props.artist}</span>
            </p>
        </div>
    )
}

export default SongBox;