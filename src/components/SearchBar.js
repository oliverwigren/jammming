import React from 'react';
import styles from '../styles/SearchBar.module.css';

// const handleChange = ({target}) => {
//     setSearch(target.value);
// }

const handleSubmit = (e) => {
    e.preventDefault();
}

function SearchBar() {
    return (
        <div className={styles.BG}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input className={styles.input} type='text' name='search' required placeholder='Search for a song'/>
                <button className={styles.button} type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;