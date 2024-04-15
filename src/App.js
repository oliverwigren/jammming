import React, { useState } from "react";
import Header from "./components/Header";
import SearchBarArea from "./components/SearchBarArea";
import "./App.css";
import PlaylistArea from "./components/PlaylistArea";
import SearchResultsArea from "./components/SearchResultsArea";
import { SongContextArea } from "./SongContext";

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
  //const [playlist, setPlaylist] = useState(playListSongs);
  const [searchResults, setSearchResults] = useState(searchResultSongs);

  return (
    <div className="App">
      <Header />
      <SearchBarArea />
      <SongContextArea startValue={playlistSongs}>
        <PlaylistArea />
      </SongContextArea>
      {/* <SongContextArea value={{searchResults, setSearchResults}}>
        <SearchResultsArea songs={searchResults} />
      </SongContextArea> */}
    </div>
  );
}
///*value={{playlist, setPlaylist}}*/

export default App;
