import React, { useContext } from 'react';
import styles from '../styles/SearchBar.module.css';
import { SearchContext } from '../context/SearchContextArea';

// const handleChange = ({target}) => {
//     setSearch(target.value);
// }

const handleSubmit = (e) => {
    e.preventDefault();
    
    //setSearch(e.target.value)
}

function SearchBar() {

    const {setSearch} = useContext(SearchContext);
    setSearch('hello')

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