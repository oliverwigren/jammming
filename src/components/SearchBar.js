import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "../styles/SearchBar.module.css";
import { SearchContext } from "../context/SearchContextArea";

function SearchBar() {
  const { search, setSearch, accessToken } = useContext(SearchContext);
  const [searchWord, setSearchWord] = useState("");
  const [generate, setGenerate] = useState(false);
  const loaded = useRef(false);

  //TODO: Inte köras på första iteration
  //TODO: Comments

  useEffect(() => {
    const getData = async (searchWord, token) => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${searchWord}&type=track&limit=10`,
          {
            headers: {
              Authorization:
                "Bearer " + token,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setSearch(data);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    if (loaded.current) {
      getData(searchWord, accessToken);
    }
    loaded.current = true;
  }, [generate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setGenerate(!generate);
  };

  const handleChange = ({ target }) => {
    setSearchWord(target.value);
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
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
