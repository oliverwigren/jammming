import React, { useState} from "react";
import SearchBar from "./SearchBar";
import styles from '../styles/SearchBarArea.module.css'; 


function SearchBarArea() {

    return (
        <section className={styles.BG}>
            <h2>Search for a Song</h2>
            <SearchBar />
        </section>
    )
}

export default SearchBarArea;