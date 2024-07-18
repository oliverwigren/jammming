import SaveToSpotifyContainer, {
  extractUris,
} from "../containers/SaveToSpotifyContainer.js";
import SpotifyAuth from "../components/SpotifyAuth.js";
import {
  configInfoText,
} from "../containers/SaveToSpotifyContainer.js";
import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { SongsContext, SongsContextArea } from "../context/SongsContextArea.js";
import PlaylistArea from '../components/PlaylistArea.js'
import Playlist from "../components/Playlist.js";
import SaveToSpotify from "../components/SaveToSpotify.js";
import { act } from "react-dom/test-utils";
import { getUserId, createPlaylist } from "./__mocks__/mockFunctions.js";

it("Gets user id", async () => {
  const expectedResult = 'bjf5xcwcmc5wz5soxpr6f71um'
  getUserId.mockReturnValueOnce('bjf5xcwcmc5wz5soxpr6f71um')

  expect(getUserId()).toBe(expectedResult);
});

it("Creates playlist", async () => {
  const expectedResult = '25yYXAFh4sbq5ktBkki5bL'
  createPlaylist.mockReturnValueOnce('25yYXAFh4sbq5ktBkki5bL')
  
  expect(createPlaylist()).toEqual(expectedResult);
});

it("Extract uris from array of tracks", async () => {
  // Arrange
  const expectedResult = [
    "spotify:track:1Yk0cQdMLx5RzzFTYwmuld",
    "spotify:track:2pRmnaUpB45s6i3AvHS17F",
    "spotify:track:2Q84nSfFAHtFNwZhAKH0Sa",
  ];
  const tracks = [
    {
      album: "Terminator 2: Judgment Day (Remastered 2017)",
      name: "Main Title Terminator 2 Theme - Remastered 2017",
      artist: "Brad Fiedel",
      id: "2Q84nSfFAHtFNwZhAKH0Sa",
      uri: "spotify:track:2Q84nSfFAHtFNwZhAKH0Sa",
    },
    {
      album: "A State Of Trance 2017 (Mixed by Armin van Buuren)",
      name: "This Is A Test",
      artist: "Armin van Buuren",
      id: "2pRmnaUpB45s6i3AvHS17F",
      uri: "spotify:track:2pRmnaUpB45s6i3AvHS17F",
    },
    {
      album: "25",
      name: "Hello",
      artist: "Adele",
      id: "1Yk0cQdMLx5RzzFTYwmuld",
      uri: "spotify:track:1Yk0cQdMLx5RzzFTYwmuld",
    },
  ];
  // Act
  const actualResult = await extractUris(tracks);
  // Assert
  expect(actualResult).toBeDefined();
  expect(actualResult).toEqual(expectedResult);
  expect(actualResult).not.toEqual(1)
});

it("Shows red error text", () => {
  // Arrange
  const text = "Error, something went wrong";
  const color = "red";
  // Act
  render(
    <SongsContextArea
      startValuePlaylist={null}
      startValueSearchResults={null}
      name={null}
      setName={null}
      token={null}
    >
      <SaveToSpotifyContainer />
    </SongsContextArea>
  );
  configInfoText(text, true);
  const textElement = screen.getByText(text);
  // Assert
  expect(textElement).toBeInTheDocument();
  expect(textElement.innerHTML).toBe(text);
  expect(textElement.style.color).toBe(color);
});

it("Shows white success text", () => {
  // Arrange
  const text = "The playlist was succesfully created!";
  const color = "white";
  // Act
  render(
    <SongsContextArea
      startValuePlaylist={null}
      startValueSearchResults={null}
      name={null}
      setName={null}
      token={null}
    >
      <SaveToSpotifyContainer />{" "}
    </SongsContextArea>
  );
  configInfoText(text, false);
  const textElement = screen.getByText(text);
  // Assert
  expect(textElement).toBeInTheDocument();
  expect(textElement.innerHTML).toBe(text);
  expect(textElement.style.color).toBe(color);
});
