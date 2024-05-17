import React, { useContext, useEffect, useState } from "react";
import SaveToSpotify from "../components/SaveToSpotify";
import { SongsContext } from "../context/SongsContextArea";

function SaveToSpotifyContainer() {
  const { PL, PN, AT } = useContext(SongsContext);
  const [playlist] = PL;
  const [name] = PN;
  const [token] = AT;

  const [userId, setUserId] = useState(null);
  const [click, setClick] = useState(false);
  const [playlistId, setPlaylistId] = useState(null);
  const [uris, setUris] = useState([]);
  const [usedUris, setUsedUris] = useState([]);

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
        //TODO: id är null, första gången ?
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

    const extractUris = async (playlist) => {
      // Creates an array of uris from all playlist songs
      let u = [];
      playlist.forEach((song) => {
        u.push(song.uri);
      });
      return u;
    };

    const addToPlaylist = async (
      playlistId,
      token,
      playlist,
      uris, // Ta bort 
      usedUris
    ) => {
      //TODO: Inte lägga till dubbletter
      let urier = []; // Ta bort
      urier = await extractUris(playlist);
      //console.log("Playlist urier: " + urier)
      console.log("?" + uris);
      console.log("Uris:" + urier);
      console.log("Used: " + usedUris);
      console.log("Left: " + urier.filter((uri) => !usedUris.includes(uri)));

      let left = urier.filter((uri) => !usedUris.includes(uri)); // const ?

      console.log("Var " + left);
      //setUris(left); ?

      if (urier.length !== 0) {
        try {
          const response = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
              method: "POST",
              body: JSON.stringify({
                uris: left,
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            await ClearPlaylist(left);
          }
          console.log("Couldn't add tracks to playlist.");
        } catch (err) {
          console.log(err);
        }
      }
    };
    if (playlistId !== null) {
      addToPlaylist(playlistId, token, playlist, uris, usedUris);
    }

    const ClearPlaylist = async (uris) => {
      setUsedUris((prev) => [uris, ...prev]);
    };
  }, [click, token, playlistId]);

  const handleClick = () => {
    setClick(!click);
  };

  return <SaveToSpotify onClick={handleClick} />;
}

export default SaveToSpotifyContainer;
