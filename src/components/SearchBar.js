import React, { useContext } from "react";
import styles from "../styles/SearchBar.module.css";
import { SearchContext } from "../context/SearchContextArea";

function SearchBar() {
  const { search, setSearch } = useContext(SearchContext);

  const getData = async (searchWord) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/search?type=TRACK', {
        q: searchWord,
      })
      if (response.ok) {
        return await response.json()
      }
    } catch(error) {
      throw new Error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchWord = e.target.getElementsByTagName('input')[0].value;

    setSearch(getData(searchWord));
  };

  return (
    <div className={styles.BG}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="search"
          required
          placeholder="Search for a song"
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
