import React, { useState } from "react";
import Header from "./components/Header";
import SearchBarArea from "./components/SearchBarArea";
import "./App.css";
import PlaylistArea from "./components/PlaylistArea";
import SearchResultsArea from "./components/SearchResultsArea";
//import { PlaylistSongContextArea } from "./context/PlaylistSongContextArea";
import { SongsContextArea } from "./context/SongsContextArea";
import { SearchContextArea } from "./context/SearchContextArea";

// TODO: Ta in data från API

//TODO: Lägga till URI
const playlistSongs = [
  {
    artist: "Kent",
    name: "Svart Snö",
    album: "Tigerdrottningen",
    id: 1,
    uri: 'spotify:track:6rqhFgbbKwnb9MLmGQDhG6',
  },
  {
    artist: "Ted",
    name: "Jag vill ha en egen Måne",
    album: "Undringar",
    id: 2,
    uri: 'spotify:track:6RqhFgbbKwnb9MLmUQDhG7',
  },
];

const searchResultSongs = [
  {
    artist: "Kent",
    name: "Svart Snö",
    album: "Tigerdrottningen",
    id: 1,
    uri: 'spotify:track:6rqhFgbbkwnb9MLmUQDhG6',
  },
  {
    artist: "Ted",
    name: "Jag vill ha en egen Måne",
    album: "Undringar",
    id: 2,
    uri: 'spotify:track:7rqhFgbbKwnb9MLmUQDhG6',
  },
  {
    artist: "AKI, Kapten Röd", // ? ARRAY 
    name: "När solen går ner",
    album: "När solen går ner",
    id: 4,
    uri: 'spotify:track:6rqhFgbbKwnb9MLnUQDhG6',
  },
];

function App() {
  const [search, setSearch] = useState("");

  const [name, setName] = useState("Playlist");

  // const [searchResults, setSearchResults] = useState(startValueSearchResults);
  // const [playlist, setPlaylist] = useState(startValuePlaylist);

  //TODO: Fetch endpoint + search

  return (
    <div className="App">
      <Header />
      
      <SearchContextArea state={{ search, setSearch }}>
        <SearchBarArea />
      </SearchContextArea>

      <SongsContextArea
        startValuePlaylist={playlistSongs}
        startValueSearchResults={searchResultSongs}
        name= {name}
        setName={setName}
      >
        <PlaylistArea />
        <SearchResultsArea />

      </SongsContextArea>
    </div>
  );
}

export default App;
