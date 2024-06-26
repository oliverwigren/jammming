import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBarArea from "./components/SearchBarArea";
import "./App.css";
import PlaylistArea from "./components/PlaylistArea";
import SearchResultsArea from "./components/SearchResultsArea";
import { SongsContextArea } from "./context/SongsContextArea";
import { SearchContextArea } from "./context/SearchContextArea";
import SpotifyAuth from "./components/SpotifyAuth";

let playlistSongs = [];

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("Playlist");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Formatting data from API to simpler array of only the necessary values.
    if (results !== null && search) {
      try {
        let searchResultSongs = search.tracks.items.map(
          ({ artists, name, album, uri, id }) => {
            return {
              artist: artists[0].name,
              name: name,
              album: album.name,
              uri: uri,
              id: id,
            };
          }
        );
        setResults(searchResultSongs);
      } catch (err) {
        console.log(err);
      }
    }
  }, [search]);

  return (
    <div className="App">
      <Header />

      <SearchContextArea state={{ search, setSearch, accessToken }}>
        <SearchBarArea />
      </SearchContextArea>

      <SpotifyAuth setAccessToken={setAccessToken} token={accessToken} />

      <SongsContextArea
        startValuePlaylist={playlistSongs}
        startValueSearchResults={results}
        name={name}
        setName={setName}
        token={accessToken}
      >
        <PlaylistArea />
        <SearchResultsArea />
      </SongsContextArea>
    </div>
  );
}

export default App;
