import React, { useContext, useEffect, useState } from "react";
import SaveToSpotify from "../components/SaveToSpotify";
import { SongsContext } from "../context/SongsContextArea";

//TODO: Configtext ?
// TODO: Clean up

// Get User id
export const getUserId = async (token) => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/me`, {
      headers: { Authorization: "Bearer " + token },
    });
    if (response.ok) {
      const data = await response.json();
      //await setUserId(data.id);
      return data.id
    } else {
      console.log("Couldn't find user.");
      //configInfoText("Couldn't create playlist.", true)
      return 1
    }
  } catch (err) {
    console.log(err);
    //configInfoText("Couldn't create playlist.", true)
    return 2
  }
};

// Create Playlist
export const createPlaylist = async (id, token, name) => {
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
      //await setPlaylistId(data.id);
      return data.id
    } else {
      console.log("Couldn't create playlist.");
      //configInfoText("Couldn't create playlist.", true)
      return 1
    }
  } catch (err) {
    console.log(err);
    //configInfoText("Couldn't create playlist.", true)
    return 2
  }
};

// Extract only uris from array of songs
export const extractUris = async (playlist) => {
  // Creates an array of uris from all playlist songs
  let u = [];
  if (playlist.length < 1) {
    return 1
  }
  playlist.forEach((song) => {
    u.push(song.uri);
  });
  u.reverse()
  console.log(u)
  return u;
};

// Adds songs to the created playlist
export const addToPlaylist = async (playlistId, token, playlist) => {
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
        //await ClearPlaylist();
        return 0;
      }
      console.log("Couldn't add tracks to playlist.");
      configInfoText("Couldn't add tracks to playlist.", true)
      return 1
    } catch (err) {
      console.log(err);
      configInfoText("Couldn't add tracks to playlist.", true)
      return 2
    }
  }
};

export const configInfoText = async (text, isError) => {
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

function SaveToSpotifyContainer() {
  const { PL, PN, AT } = useContext(SongsContext);
  const [playlist, setPlaylist] = PL;
  const [name] = PN;
  const [token] = AT;

  const [userId, setUserId] = useState(null);
  const [click, setClick] = useState(false);
  const [playlistId, setPlaylistId] = useState(null);
  const [uris, setUris] = useState([]);

  const ClearPlaylist = () => {
  setUris([]);
  setPlaylistId(null);
  setUserId(null);
  setPlaylist([]);
  configInfoText('The playlist was succesfully created!', false)
};
//TODO: Return ?
  useEffect(() => {
    // #1 Get user id
    if (userId === null && token !== null) {
      getUserId(token).then(setUserId)
      // return
    }
    // #2 Creates playlist
    if (playlistId === null && userId !== null) {
      createPlaylist(userId, token, name).then(setPlaylistId)
      // return
    }
    // #3 Adds songs to the playlist
    if (playlistId !== null) {
      addToPlaylist(playlistId, token, playlist, uris);
      ClearPlaylist()
      // return
    }
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

export default SaveToSpotifyContainer