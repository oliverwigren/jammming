import React, { useEffect } from "react";
import styles from '../styles/SpotifyAuth.module.css'
//TODO: Handle Error, user disagrees

const SpotifyAuth = (props) => {
  useEffect(() => {
    // Check if the URL contains access token after redirection
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const token = urlParams.get("access_token");

    if (token) {
      // Saves the access token
      props.setAccessToken(token);

      const intervalId = reGenerate();
      return () => clearInterval(intervalId);
    } else {
      generateAccessToken();
    }
  }, []);

  const generateAccessToken = () => {
    const clientId = "cb64326a23414ed7a9cfca9afb18f6d8";
    const redirectUri = "http://localhost:3000/callback";
    const scopes = [
      "user-read-private",
      "user-read-email",
      "playlist-modify-private",
      "playlist-modify-public",
    ];

    const queryParams = {
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: "token",
      scope: scopes.join(" "),
    };

    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
      .join("&");

    const authUrl = `https://accounts.spotify.com/authorize?${queryString}`;

    // Redirect the user to Spotify authorization page
    window.location.href = authUrl;
  };

  const reGenerate = () => {
    // Generates a new access token before the previous has expired
    return setInterval(() => {
      generateAccessToken();
    }, 3598000);
  };

  return (
    <div className={styles.div}>
      {!props.token ? <></> : 
      <>
      <p className={styles.p} >There was an error when trying to acquire the access token, please try again</p>
      <button className={styles.button} onClick={generateAccessToken}>Generate New Access Token</button>
      </>}
    </div>
  );
};

export default SpotifyAuth;
