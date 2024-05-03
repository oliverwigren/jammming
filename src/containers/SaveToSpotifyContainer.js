import React, { useContext, useEffect, useState } from "react";
import SaveToSpotify from "../components/SaveToSpotify";
import { SongsContext } from "../context/SongsContextArea";

function SaveToSpotifyContainer() {
  const { PL, PN, AT } = useContext(SongsContext);
  const [playlist, setPlaylist] = PL;
  const [name] = PN;
  const [token] = AT;

  const [userId, setUserId] = useState(null);
  const [click, setClick] = useState(false);
  const [playlistId, setPlaylistId] = useState(null);
  const [uris, setUris] = useState([]);

  useEffect(() => {
    // Get user id
    const getUserId = async (token) => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/me`, {
          headers: { Authorization: "Bearer " + token },
        });
        if (response.ok) {
          const data = await response.json();
          await setUserId(data.id);
        } else {
          console.log("Couldn't find user.");
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (userId === null && token !== null) {
      getUserId(token);
    }

    // Create Playlist
    const createPlaylist = async (id, token, name) => {
      try {
        //TODO: id är null, första gången
        const response = await fetch(
          `https://api.spotify.com/v1/users/${id}/playlists`,
          {
            method: "POST",
            body: JSON.stringify({
              name: name,
              description: "This playlist was made with Jammming!",
              public: false,
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          await setPlaylistId(data.id);
        }
        console.log("Couldn't create playlist.");
      } catch (err) {
        console.log(err);
      }
    };
    if (playlistId === null && userId !== null) {
      createPlaylist(userId, token, name);
    }

    const addToPlaylist = async (playlistId, token, playlist, uris) => {
      //TODO: Inte lägga till dubbletter
      let urier = [];
      //console.log("Playlist: " + playlist)
      playlist.forEach((song) => {
        urier.push(song.uri);
      });
      //console.log("Playlist urier: " + urier)
      setUris(uris);

      if (urier.length !== 0) {
        try {
          const response = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
              method: "POST",
              body: JSON.stringify({
                uris: urier,
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            //return 0;
            await ClearPlaylist();
          }
          console.log("Couldn't add tracks to playlist.");
        } catch (err) {
          console.log(err);
        }
      }
    };
    if (playlistId !== null) {
      addToPlaylist(playlistId, token, playlist, uris);
    }

    const ClearPlaylist = async () => {
      //TODO: setinterval
      setUris([]);
      setPlaylist([])
    };
  }, [click, token, playlistId]);

  const handleClick = () => {
    setClick(!click);

    //const playlist_id = await createPlaylist();
    // {userId.map((v) => {
    //   alert(v)
    // })}
    //alert(userId.keys);
    //addToPlaylist(playlist_id);
  };

  return <SaveToSpotify onClick={handleClick} />;
}

export default SaveToSpotifyContainer;
