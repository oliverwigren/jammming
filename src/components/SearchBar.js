import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "../styles/SearchBar.module.css";
import { SearchContext } from "../context/SearchContextArea";

function SearchBar() {
  const { search, setSearch, token } = useContext(SearchContext);
  const [searchWord, setSearchWord] = useState("");
  const [generate, setGenerate] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    //alert(token) TODO: Token är alltid undefined
    const getData = async (searchWord) => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${searchWord}&type=track&limit=10`,
          {
            headers: {
              Authorization:
                "Bearer BQASlPEgQ367-UjS6o3s4oMBjEl3zWCusCWsZHBb101mfCtn6iWh8itd947qPeNcxWEGGzLYalOyIg1ttlUj28OW51JsZAfnDnefSbQSTBQXppNsR795wvn9uOKKjXIrIQCx17LIsL512m2_W4WhXdcXVOlAzyH-lGtjgwoQVZyN0j26TEHa1izArr9afynXlVCD1Ero8nZa6oONb5U", //Bearer " + token,
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
      getData(searchWord);
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
