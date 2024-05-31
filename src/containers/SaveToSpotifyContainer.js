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
          configInfoText("Couldn't create playlist.", true)
        }
      } catch (err) {
        console.log(err);
        configInfoText("Couldn't create playlist.", true)
      }
    };

    if (userId === null && token !== null) {
      getUserId(token);
    }

    // Create Playlist
    const createPlaylist = async (id, token, name) => {
      try {
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
        } else {
          console.log("Couldn't create playlist.");
          configInfoText("Couldn't create playlist.", true)
        }
      } catch (err) {
        console.log(err);
        configInfoText("Couldn't create playlist.", true)
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

    const addToPlaylist = async (playlistId, token, playlist) => {
      // Adds songs to the created playlist
      let uris = await extractUris(playlist);
      if (uris.length !== 0) {
        try {
          const response = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
              method: "POST",
              body: JSON.stringify({
                uris: uris,
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            await ClearPlaylist();
            return 0;
          }
          console.log("Couldn't add tracks to playlist.");
          configInfoText("Couldn't add tracks to playlist.", true)
        } catch (err) {
          console.log(err);
          configInfoText("Couldn't add tracks to playlist.", true)
        }
      }
    };
    if (playlistId !== null) {
      addToPlaylist(playlistId, token, playlist, uris);
    }

    const configInfoText = async (text, isError) => {
      const infoText = document.getElementById('infoText');

      if (isError) {
        infoText.style.color = 'red'
      } else {
        infoText.style.color = 'white'
      }

      infoText.innerHTML = text;

      setTimeout(() => {
        infoText.innerHTML = '';
      }, 3500)
    }

    const ClearPlaylist = async () => {
      setUris([]);
      setPlaylistId(null);
      setUserId(null);
      setPlaylist([]);
      configInfoText('The playlist was succesfully created!', false)
    };
  }, [click, token, playlistId]);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <SaveToSpotify onClick={handleClick} />
      <p id="infoText"></p>
    </>
  );
}

export default SaveToSpotifyContainer;
