import React, { useState, useEffect } from 'react';

const SpotifyAuth = (props) => {

  useEffect(() => {
    // Check if the URL contains access token after redirection
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const token = urlParams.get('access_token');

    if (token) {
      // Save the access token to a variable or state
      props.setAccessToken(token);
    }
  }, []);

  const generateAccessToken = () => {
    const clientId = 'cb64326a23414ed7a9cfca9afb18f6d8'; // Replace with your Spotify Client ID
    const redirectUri = 'http://localhost:3000/callback'; // Replace with your redirect URI
    const scopes = ['user-read-private', 'user-read-email']; // Add the scopes you need

    const queryParams = {
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'token',
      scope: scopes.join(' '),
    };

    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    const authUrl = `https://accounts.spotify.com/authorize?${queryString}`;
    
    // Redirect the user to Spotify authorization page
    window.location.href = authUrl;
  };

  return (
    <div>
      <button onClick={generateAccessToken}>Generate Access Token</button>
    </div>
  );
};

export default SpotifyAuth;
