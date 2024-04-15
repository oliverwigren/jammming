import React, { useState } from "react";
import Header from "./components/Header";
import SearchBarArea from "./components/SearchBarArea";
import "./App.css";
import PlaylistArea from "./components/PlaylistArea";
import SearchResultsArea from "./components/SearchResultsArea";
import { PlaylistSongContextArea } from "./context/PlaylistSongContextArea";
import { SongsContextArea } from "./context/SongsContextArea";

// TODO: Ta in data från API

const playlistSongs = [
  {
    artist: "Kent",
    name: "Svart Snö",
    album: "Tigerdrottningen",
  },
  {
    artist: "Ted",
    name: "Jag vill ha en egen Måne",
    album: "Undringar",
  },
];

const searchResultSongs = [
  {
    artist: "Svenska björnstammen",
    name: "Snorvalp",
    album: "I förhållande till",
  },
  {
    artist: "Kent",
    name: "Svart Snö",
    album: "Tigerdrottningen",
  },
  {
    artist: "Ted",
    name: "Jag vill ha en egen Måne",
    album: "Undringar",
  },
  {
    artist: "AKI, Kapten Röd", // ARRAY
    name: "När solen går ner",
    album: "När solen går ner",
  },
];

function App() {

  return (
    <div className="App">
      <Header />
      {/*Search context*/}
      <SearchBarArea />
      <SongsContextArea startValuePlaylist={playlistSongs} startValueSearchResults={searchResultSongs} >
        <PlaylistArea />
      </SongsContextArea>
      <SongsContextArea startValuePlaylist={playlistSongs} startValueSearchResults={searchResultSongs} >
        <SearchResultsArea />
      </SongsContextArea> 
    </div>
  );
}
///*value={{playlist, setPlaylist}}*/

export default App;
