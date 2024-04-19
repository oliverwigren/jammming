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
const data = {
  "tracks": {
    "href": "https://api.spotify.com/v1/search?query=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&locale=sv-SE%2Csv%3Bq%3D0.9&offset=0&limit=2",
    "limit": 2,
    "next": "https://api.spotify.com/v1/search?query=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=track&locale=sv-SE%2Csv%3Bq%3D0.9&offset=2&limit=2",
    "offset": 0,
    "previous": null,
    "total": 800,
    "items": [
      {
        "album": {
          "album_type": "album",
          "total_tracks": 12,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3iC6u4b7pxcrreH1w5C5HD"
          },
          "href": "https://api.spotify.com/v1/albums/3iC6u4b7pxcrreH1w5C5HD",
          "id": "3iC6u4b7pxcrreH1w5C5HD",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b273299858bf7b0fc16788ad1077",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e02299858bf7b0fc16788ad1077",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00004851299858bf7b0fc16788ad1077",
              "height": 64,
              "width": 64
            }
          ],
          "name": "The '59 Sound",
          "release_date": "2009-08-19",
          "release_date_precision": "day",
          "type": "album",
          "uri": "spotify:album:3iC6u4b7pxcrreH1w5C5HD",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7If8DXZN7mlGdQkLE2FaMo"
              },
              "href": "https://api.spotify.com/v1/artists/7If8DXZN7mlGdQkLE2FaMo",
              "id": "7If8DXZN7mlGdQkLE2FaMo",
              "name": "The Gaslight Anthem",
              "type": "artist",
              "uri": "spotify:artist:7If8DXZN7mlGdQkLE2FaMo"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7If8DXZN7mlGdQkLE2FaMo"
            },
            "href": "https://api.spotify.com/v1/artists/7If8DXZN7mlGdQkLE2FaMo",
            "id": "7If8DXZN7mlGdQkLE2FaMo",
            "name": "The Gaslight Anthem",
            "type": "artist",
            "uri": "spotify:artist:7If8DXZN7mlGdQkLE2FaMo"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 251413,
        "explicit": false,
        "external_ids": {
          "isrc": "USA6G0835806"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2bKjpm9nmsfKaE3sLq1scQ"
        },
        "href": "https://api.spotify.com/v1/tracks/2bKjpm9nmsfKaE3sLq1scQ",
        "id": "2bKjpm9nmsfKaE3sLq1scQ",
        "name": "Miles Davis & The Cool",
        "popularity": 38,
        "preview_url": "https://p.scdn.co/mp3-preview/3d2910523296d8670ff399fc43e97aed491bdee1?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:2bKjpm9nmsfKaE3sLq1scQ",
        "is_local": false
      },
      {
        "album": {
          "album_type": "album",
          "total_tracks": 9,
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/56I4vUYWQ4aXLiyfo8XuZv"
          },
          "href": "https://api.spotify.com/v1/albums/56I4vUYWQ4aXLiyfo8XuZv",
          "id": "56I4vUYWQ4aXLiyfo8XuZv",
          "images": [
            {
              "url": "https://i.scdn.co/image/ab67616d0000b2735e10a5aca3763224e2050016",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://i.scdn.co/image/ab67616d00001e025e10a5aca3763224e2050016",
              "height": 300,
              "width": 300
            },
            {
              "url": "https://i.scdn.co/image/ab67616d000048515e10a5aca3763224e2050016",
              "height": 64,
              "width": 64
            }
          ],
          "name": "Milestones",
          "release_date": "1958-04",
          "release_date_precision": "month",
          "type": "album",
          "uri": "spotify:album:56I4vUYWQ4aXLiyfo8XuZv",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4"
              },
              "href": "https://api.spotify.com/v1/artists/0kbYTNQb4Pb1rPbbaF0pT4",
              "id": "0kbYTNQb4Pb1rPbbaF0pT4",
              "name": "Miles Davis",
              "type": "artist",
              "uri": "spotify:artist:0kbYTNQb4Pb1rPbbaF0pT4"
            }
          ]
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4"
            },
            "href": "https://api.spotify.com/v1/artists/0kbYTNQb4Pb1rPbbaF0pT4",
            "id": "0kbYTNQb4Pb1rPbbaF0pT4",
            "name": "Miles Davis",
            "type": "artist",
            "uri": "spotify:artist:0kbYTNQb4Pb1rPbbaF0pT4"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2hGh5VOeeqimQFxqXvfCUf"
            },
            "href": "https://api.spotify.com/v1/artists/2hGh5VOeeqimQFxqXvfCUf",
            "id": "2hGh5VOeeqimQFxqXvfCUf",
            "name": "John Coltrane",
            "type": "artist",
            "uri": "spotify:artist:2hGh5VOeeqimQFxqXvfCUf"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5v74mT11KGJqadf9sLw4dA"
            },
            "href": "https://api.spotify.com/v1/artists/5v74mT11KGJqadf9sLw4dA",
            "id": "5v74mT11KGJqadf9sLw4dA",
            "name": "Cannonball Adderley",
            "type": "artist",
            "uri": "spotify:artist:5v74mT11KGJqadf9sLw4dA"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/35iymrFS4VnsKn35ebHKX9"
            },
            "href": "https://api.spotify.com/v1/artists/35iymrFS4VnsKn35ebHKX9",
            "id": "35iymrFS4VnsKn35ebHKX9",
            "name": "Red Garland",
            "type": "artist",
            "uri": "spotify:artist:35iymrFS4VnsKn35ebHKX9"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0M1UOBJZ9tcKJbrbnVlHZG"
            },
            "href": "https://api.spotify.com/v1/artists/0M1UOBJZ9tcKJbrbnVlHZG",
            "id": "0M1UOBJZ9tcKJbrbnVlHZG",
            "name": "Paul Chambers",
            "type": "artist",
            "uri": "spotify:artist:0M1UOBJZ9tcKJbrbnVlHZG"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4WhH68K75YKSAwHAqWFpi1"
            },
            "href": "https://api.spotify.com/v1/artists/4WhH68K75YKSAwHAqWFpi1",
            "id": "4WhH68K75YKSAwHAqWFpi1",
            "name": "Philly Joe Jones",
            "type": "artist",
            "uri": "spotify:artist:4WhH68K75YKSAwHAqWFpi1"
          }
        ],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "PR", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 635066,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM15800954"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7l5In0rLyHmqJhKlzZPtYo"
        },
        "href": "https://api.spotify.com/v1/tracks/7l5In0rLyHmqJhKlzZPtYo",
        "id": "7l5In0rLyHmqJhKlzZPtYo",
        "name": "Straight, No Chaser (feat. John Coltrane, Cannonball Adderley, Red Garland, Paul Chambers & Philly Joe Jones)",
        "popularity": 45,
        "preview_url": "https://p.scdn.co/mp3-preview/2dbcf097b512addae44c70bf233f03840e89c8ce?cid=cfe923b2d660439caf2b557b21f31221",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:7l5In0rLyHmqJhKlzZPtYo",
        "is_local": false
      }
    ]
  }
}

let playlistSongs = [
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
  // Formatting data from API to simpler array of only the necessary values.
  const searchResultSongs = data.tracks.items.map(({artists, name, album, uri, id}) => {
    return {
    artist: artists[0].name,
    name: name,
    album: album.name,
    uri: uri,
    id: id,
  }
  })

  const [search, setSearch] = useState("");

  const [name, setName] = useState("Playlist");

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
