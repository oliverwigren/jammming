import React from "react";
import SearchResults from "./SearchResults";
import styles from "../styles/SearchResultsArea.module.css";

function SearchResultsArea() {
  return (
    <section className={styles.section}>
      <h3>Search Results</h3>
      <div styles={styles.div}>
        <SearchResults />
        <SearchResults />
        <SearchResults />
      </div>
    </section>
  );
}

export default SearchResultsArea;
