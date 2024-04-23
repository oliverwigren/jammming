import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { SearchContext } from "../context/SearchContextArea";

function SearchBar() {
  const { search, setSearch, token } = useContext(SearchContext);
  const [searchWord, setSearchWord] = useState("");
  const [generate, setGenerate] = useState(false);

  useEffect(() => {
    alert(token);
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/search/",
          {
            q: searchWord,
            type: ["track"],
            headers: {
              Authorization: "Bearer " + token,
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

    getData();
  }, [generate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchWord(e.target.getElementsByTagName("input")[0].value);
    setGenerate(!generate);
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
