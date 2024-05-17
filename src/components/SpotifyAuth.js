import React, { useState, useEffect } from "react";

//TODO: Clean up och kommentera
//TODO: Runs twice

const SpotifyAuth = (props) => {
  const [generate, setGenerate] = useState(true);

  useEffect(() => {
    // Generate token
    // if (generate === true) {
    //   generateAccessToken();
    //   setGenerate(false)
    // }
    // console.log(generate);

    // Check if the URL contains access token after redirection
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const token = urlParams.get("access_token");

    if (token) {
      // Saves the access token to a variable or state
      props.setAccessToken(token);
      //reGenerate();
      console.log("Token is" + token);
      const intervalId = reGenerate();
      return () => clearInterval(intervalId)
      //console.log(id)
    } else {
      generateAccessToken();
      //reGenerate()
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
    console.log("Regenerating");
    return setInterval(() => {
      //setGenerate(!generate);
      //props.setAccessToken(null)

      generateAccessToken();
    }, 60000); //TODO: Set correct time
  };

  return (
    <div>
      <button onClick={generateAccessToken}>Generate New Access Token</button>
    </div>
  );
};

export default SpotifyAuth;
