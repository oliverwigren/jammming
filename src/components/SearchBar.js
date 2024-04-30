import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "../styles/SearchBar.module.css";
import { SearchContext } from "../context/SearchContextArea";

function SearchBar() {
  const { search, setSearch, token } = useContext(SearchContext);
  const [searchWord, setSearchWord] = useState("");
  const [generate, setGenerate] = useState(false);
  const loaded = useRef(false)

  useEffect(() => {
    //alert(token) TODO: Alltid undefined
    const getData = async () => {

      setSearchWord(document.getElementsByTagName("input")[0].value);
      //alert("GetData")
      try {
        let hello = searchWord
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${hello}&type=track&limit=10`,
          {
            headers: {
              Authorization: "Bearer BQBMn0JeCcxzF3G1zUzvC37E3YDPKD9fPWpVpBBu9ZQdDW1KZtmDR35v68ldhEioCwQN0HeCsbRwSoQOSuDTPQzuAzVvMpY9SCBytN4E6oc0bG2zQ9Dy3l5jtbVnG8zsEksgb31bWAYacz8oUf9A6ekUDFUvKvjU7vawxE01wYpthpYSica9BcgVBI3EXHYBx92j-jvClk0_89xKr0I" //"Bearer " + token,
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
  getData();

}
  loaded.current = true

  }, [generate]);

  const handleSubmit = (e) => {
    e.preventDefault();

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
