import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "../styles/SearchBar.module.css";
import { SearchContext } from "../context/SearchContextArea";

// Gets track data from Spotify with the search query inputted
export const getData = async (searchWord, token) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${searchWord}&type=track&limit=10`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      //setSearch(data);
      console.log(data)
      return data
    } else {
      console.log("Couldn't get search data");
      return 1
    }
  } catch (err) {
    console.log(err);
    return 2
  }
};

function SearchBar() {
  const { setSearch, accessToken } = useContext(SearchContext);
  const [searchWord, setSearchWord] = useState("");
  const [generate, setGenerate] = useState(false);

  useEffect(() => {
    if (accessToken !== null && searchWord.trim() !== "") {
      getData(searchWord, accessToken).then(setSearch);
    }
  }, [generate, accessToken]);

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
          autoComplete="off"
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
