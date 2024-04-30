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
  const [playlistId, setPlaylistId] = useState(null)

  let uris = [];

  // playlist.forEach((song) => {
  //   uris.push(song.uri);
  // });

  const baseURL = "https://api.spotify.com/v1/";
  // useEffect(() => {
  //   // Get user id
  //   const getUserId = async () => {
  //     try {
  //       const response = await fetch(`${baseURL}me`, {
  //         headers: { Authorization: "Bearer " + token },
  //       });
  //       if (response.ok) {
  //         const data = await response.json();
  //         await setUserId(data.id);
  //       } else {
  //         console.log("Couldn't find user.");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   if (userId === null) {
  //     getUserId();
  //   }

  //   // Create Playlist
  //   const createPlaylist = async () => {
  //     try {
  //       const response = await fetch(`${baseURL}users/${userId}/playlists`, {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name: name,
  //           description: "This playlist was made with Jammming!", //TODO: FIX
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       if (response.ok) {
  //         const data = await response.json();
  //         await setPlaylistId(data.id)
  //       }
  //       console.log("Couldn't create playlist.");
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };
  //   if (playlistId === null || userId === null) {
  //     createPlaylist()
  //   }
  // }, [click]);

  // const addToPlaylist = async ({ id }) => {
  //   try {
  //     const response = await fetch(
  //       `${baseURL}users/${user_id}/playlists/${id}tracks`,
  //       {
  //         method: "POST",
  //         body: {
  //           uris: uris,
  //         },
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`
  //         },
  //       }
  //     );
  //     if (response.ok) {
  //       return 0;
  //     }
  //     throw new Error("Couldn't add tracks to playlist.");
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };

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
