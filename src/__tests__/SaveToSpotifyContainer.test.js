import SaveToSpotifyContainer, {
  extractUris,
} from "../containers/SaveToSpotifyContainer.js";
import SpotifyAuth from "../components/SpotifyAuth.js";
import {
  getUserId,
  createPlaylist,
  addToPlaylist,
  configInfoText,
} from "../containers/SaveToSpotifyContainer.js";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {
  getMockAT,
  getMockID,
  getMockPlaylistID,
} from "../__mocks__/getMockData.js";
import { SongsContext, SongsContextArea } from "../context/SongsContextArea.js";

it("Gets user id", async () => {
  //Arrange
  const expectedResult = "bjf5xcwcmc5wz5soxpr6f71um";
  // Access token
  const token = getMockAT();
  //Act
  const actualResult = await getUserId(token);
  //Assert
  expect(actualResult).toBeDefined();
  expect(actualResult).toBe(expectedResult);
});

it("Creates playlist", async () => {
  // Arrange
  //const expectedResult = getMockPlaylistID()
  const id = getMockID();
  const token = getMockAT();
  const name = "Playlist";
  // Act
  const actualResult = await createPlaylist(id, token, name);
  // Assert
  expect(actualResult).toBeDefined();
  expect(actualResult).not.toEqual(1);
  expect(actualResult).not.toEqual(2);
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
      <SaveToSpotifyContainer />{" "}
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

// it('Song-boxes disappear on submit', async () => {
// click
// wait
// check if empty
// })
