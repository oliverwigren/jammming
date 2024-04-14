import Header from "./components/Header";
import SearchBarArea from "./components/SearchBarArea";
import "./App.css";
import Main from "./components/Main";

// TODO: Ta in data från API

const playListSongs = [
  {
    artist: 'Kent',
    name: 'Svart Snö',
    album: 'Tigerdrottningen',
  },
  {
    artist: 'Ted',
    name: 'Jag vill ha en egen Måne',
    album: 'Undringar',

  }
];

const searchResultSongs = [
  {
    artist: 'Svenska björnstammen',
    name: 'Snorvalp',
    album: 'I förhållande till',
  },
  {
    artist: 'Kent',
    name: 'Svart Snö',
    album: 'Tigerdrottningen',
  },
  {
    artist: 'Ted',
    name: 'Jag vill ha en egen Måne',
    album: 'Undringar',

  },
  {
    artist: 'AKI, Kapten Röd', // ARRAY
    name: 'När solen går ner',
    album: 'När solen går ner',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBarArea />
      <Main playListSongs={playListSongs} searchResultSongs={searchResultSongs} />
    </div>
  );
}

export default App;
