import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBarArea from "./components/SearchBarArea";
import "./App.css";
import PlaylistArea from "./components/PlaylistArea";
import SearchResultsArea from "./components/SearchResultsArea";
//import { PlaylistSongContextArea } from "./context/PlaylistSongContextArea";
import { SongsContextArea } from "./context/SongsContextArea";
import { SearchContextArea } from "./context/SearchContextArea";
import SpotifyAuth from "./components/SpotifyAuth";


let playlistSongs = [
  {
    artist: "kent",
    name: "Svart snö",
    album: "Tigerdrottningen",
    id: '3g2FEGXN4Nh0qZ8FtqbS42',
    uri: "spotify:track:3g2FEGXN4Nh0qZ8FtqbS42",
  },
  {
    artist: "Ted",
    name: "Jag vill ha en egen Måne",
    album: "Undringar",
    id: '4LqNNFPl9lfT5deIQiRPwI',
    uri: "spotify:track:4LqNNFPl9lfT5deIQiRPwI",
  },
];

// let searchResultSongs = [ // Ta bort mock-code
//   {
//     artist: "Kent",
//     name: "Svart Snö",
//     album: "Tigerdrottningen",
//     id: 1,
//     uri: 'spotify:track:6rqhFgbbkwnb9MLmUQDhG6',
//   },
//   {
//     artist: "Ted",
//     name: "Jag vill ha en egen Måne",
//     album: "Undringar",
//     id: 2,
//     uri: 'spotify:track:7rqhFgbbKwnb9MLmUQDhG6',
//   },
//   {
//     artist: "AKI, Kapten Röd", // ? ARRAY
//     name: "När solen går ner",
//     album: "När solen går ner",
//     id: 4,
//     uri: 'spotify:track:6rqhFgbbKwnb9MLnUQDhG6',
//   },
// ];

function App() {
  //cb64326a23414ed7a9cfca9afb18f6d8

  const [accessToken, setAccessToken] = useState(null);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("Playlist");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // let searchResultSongs = /*search istället för data*/ data.tracks.items.map(
    //   ({ artists, name, album, uri, id }) => {
    //     return {
    //       artist: artists[0].name,
    //       name: name,
    //       album: album.name,
    //       uri: uri,
    //       id: id,
    //     };
    //   }
    // );

    // Formatting data from API to simpler array of only the necessary values.
    if (results !== null && search) {
      try {
        let searchResultSongs =
          /*search istället för data*/ search.tracks.items.map(
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

      <SpotifyAuth setAccessToken={setAccessToken} />

      <SongsContextArea
        startValuePlaylist={playlistSongs}
        startValueSearchResults={results} //{searchResultSongs}
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
