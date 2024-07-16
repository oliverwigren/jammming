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
  getMockTracksFromSearch,
} from "../__mocks__/getMockData.js";
import { SongsContext, SongsContextArea } from "../context/SongsContextArea.js";
import PlaylistArea from '../components/PlaylistArea.js'
import Playlist from "../components/Playlist.js";
import SaveToSpotify from "../components/SaveToSpotify.js";
import { act } from "react-dom/test-utils";

it("Gets user id", async () => {
  // Arrange
  const expectedResult = getMockID() // User id
  const token = getMockAT(); // Access token
  //Act
  const actualResult = await getUserId(token);
  //Assert
  expect(actualResult).toBeDefined();
  expect(actualResult).toBe(expectedResult);
  expect(actualResult).not.toEqual(1)
  expect(actualResult).not.toEqual(2)
});

it("Creates playlist", async () => {
  // Arrange
  //const expectedResult = getMockPlaylistID() //TODO: 
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
//TODO: Song-boxes disappear on submit
it('Song-boxes disappear on submit', async () => {
render(<SongsContextArea startValuePlaylist={[{artist: 'Adele', name: 'Hello', album: 25, id: '123', uri: 123}]} startValueSearchResults={[]} ><PlaylistArea> <Playlist /> <SaveToSpotifyContainer><SaveToSpotify/></SaveToSpotifyContainer> </PlaylistArea></SongsContextArea>)
const button = screen.getByRole('submitPlaylist')
const container = screen.getByRole('playlistContainer')
// click
act(() => {
  userEvent.click(button)

})
// wait
await waitFor(() => {
  const box = screen.findByRole('AddedTrack')
  // check if empty
  //expect(box).not.toBeInTheDocument()
  expect(container).toBeEmptyDOMElement()
})
})
