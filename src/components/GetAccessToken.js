//import React from "react";

//TODO: CODE verifier
//TODO: Code challenges

const clientId = "cb64326a23414ed7a9cfca9afb18f6d8";
const redirectUri = "http://localhost:3000";

const scope = ""; //TODO: FIll in
const authURL = "";

//TODO: Generate
const codeVerifier = null;
window.localStorage.setItem("code_verifier", codeVerifier);

const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
};

authURL.search = new URLSearchParams(params).toString();
window.location.href = authURL.toString();
