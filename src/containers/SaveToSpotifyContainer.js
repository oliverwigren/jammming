import React, { useContext, useState } from "react";
import SaveToSpotify from "../components/SaveToSpotify";
import { SongsContext } from "../context/SongsContextArea";

function SaveToSpotifyContainer() {
  const { PL, PN } = useContext(SongsContext);
  const [playlist] = PL;
  const [name] = PN;

  const user_id = "oliv";
  let uris = [];

  playlist.forEach((song) => {
    uris.push(song.uri);
  });

  const baseURL = "https://api.spotify.com/";

  const createPlaylist = async () => {
    try {
      const response = await fetch(`${baseURL}users/${user_id}/playlists`, {
        method: "POST",
        body: {
          name: name,
          description: "This playlist was made with Jammming!",
        },
      });
      if (response.ok) {
        return await response.json();
      }
      throw new Error("Couldn't create playlist.");
    } catch (err) {
      throw new Error(err);
    }
  };

  const addToPlaylist = async ({ id }) => {
    try {
      const response = fetch(
        `${baseURL}users/${user_id}/playlists/${id}/tracks`,
        {
          method: "POST",
          body: {
            uris: uris.json(),
          },
        }
      );
      if (response.ok) {
        return 0;
      }
      throw new Error("Couldn't add tracks to playlist.");
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleClick = async () => {
    const playlist_id = await createPlaylist();

    addToPlaylist(playlist_id);
  };

  return <SaveToSpotify onClick={handleClick}/>
}

export default SaveToSpotifyContainer;
