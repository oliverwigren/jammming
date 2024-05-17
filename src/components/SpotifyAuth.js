import React, { useState, useEffect } from "react";

const SpotifyAuth = (props) => {
  const [generate, setGenerate] = useState(false);

  useEffect(() => {
    // Generate token
    generateAccessToken();

    // Check if the URL contains access token after redirection
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const token = urlParams.get("access_token");

    if (token) {
      // Saves the access token to a variable or state
      props.setAccessToken(token);
      reGenerate();
    }
  }, [generate]);

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
    setInterval(() => {
      setGenerate(!generate);
    }, 3000);
  };

  return (
    <div>
      <button onClick={generateAccessToken}>Generate Access Token</button>
    </div>
  );
};

export default SpotifyAuth;
