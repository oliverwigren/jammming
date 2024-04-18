import React, {useState} from "react";
import styles from '../styles/PlaylistName.module.css';

function PlaylistName() {
    //TODO: Få ut playlist-name värdet till toppen
    
    const [name, setName] = useState('Playlist')

    const handleChange = ({target}) => {
        setName(target.value);
    }

    return (
        <form>
            <input className={styles.input} onChange={handleChange} placeholder={name} value={name} required></input>
        </form>
    )
}

export default PlaylistName;