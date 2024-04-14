import React from "react";
import SearchResultsArea from "./SearchResultsArea";
import PlaylistArea from "./PlaylistArea";



function Main(props) {
  return (
    <>
      <PlaylistArea songs={props.playListSongs} />
      <SearchResultsArea searchSongs={props.searchResultSongs} />
    </>
  );
}

export default Main;
