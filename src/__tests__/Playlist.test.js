import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";
import { SongsContextArea } from "../context/SongsContextArea";
import SearchResultsArea from "../components/SearchResultsArea";
import PlaylistArea from '../components/PlaylistArea'
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Playlist from "../components/Playlist";

it('Renders SongBoxes in Playlist area after being added', async () => {
    const searchResults = [
        {
          "artist": "Adele",
          "name": "Hello",
          "album": "25",
          "uri": "spotify:track:1Yk0cQdMLx5RzzFTYwmuld",
          "id": "1Yk0cQdMLx5RzzFTYwmuld"
        },
        {
          "artist": "OMFG",
          "name": "Hello",
          "album": "Hello",
          "uri": "spotify:track:6BAnxKyld909yo6Pk1DO3r",
          "id": "6BAnxKyld909yo6Pk1DO3r"
        },
        {
          "artist": "Lionel Richie",
          "name": "Hello",
          "album": "Can't Slow Down",
          "uri": "spotify:track:6HMvJcdw6qLsyV1b5x29sa",
          "id": "6HMvJcdw6qLsyV1b5x29sa"
        },
        {
          "artist": "Dolly Style",
          "name": "Hello Hi",
          "album": "Hello Hi",
          "uri": "spotify:track:0sDlK1E6m2Qbi0Nn7n7SHL",
          "id": "0sDlK1E6m2Qbi0Nn7n7SHL"
        },
        {
          "artist": "Mohombi",
          "name": "Hello",
          "album": "Hello",
          "uri": "spotify:track:4s2QheDmwez4q3AhCyaGWc",
          "id": "4s2QheDmwez4q3AhCyaGWc"
        },
        {
          "artist": "Simon & Garfunkel",
          "name": "The Sound of Silence",
          "album": "The Singer",
          "uri": "spotify:track:3YfS47QufnLDFA71FUsgCM",
          "id": "3YfS47QufnLDFA71FUsgCM"
        },
        {
          "artist": "Pop Smoke",
          "name": "Hello (feat. A Boogie Wit da Hoodie)",
          "album": "Shoot For The Stars Aim For The Moon (Deluxe)",
          "uri": "spotify:track:2r6OAV3WsYtXuXjvJ1lIDi",
          "id": "2r6OAV3WsYtXuXjvJ1lIDi"
        },
        {
          "artist": "Hello Saferide",
          "name": "The Quiz",
          "album": "Would You Let Me Play This EP 10 Times A Day?",
          "uri": "spotify:track:4jsCgpmMyph0onXF2Sh1zC",
          "id": "4jsCgpmMyph0onXF2Sh1zC"
        },
        {
          "artist": "Maja Francis",
          "name": "Hello Cowboy",
          "album": "Hello Cowboy",
          "uri": "spotify:track:2cA6vVOVZCopd5I3VkbLKi",
          "id": "2cA6vVOVZCopd5I3VkbLKi"
        },
        {
          "artist": "Louis Armstrong",
          "name": "Hello, Dolly!",
          "album": "Hello, Dolly! (Remastered)",
          "uri": "spotify:track:63kd4m3VFxcJjPVVtbVNAu",
          "id": "63kd4m3VFxcJjPVVtbVNAu"
        }
      ]
    const songText = 'Adele'

    render(<SongsContextArea startValuePlaylist={[]} startValueSearchResults={searchResults} > <PlaylistArea><Playlist></Playlist></PlaylistArea> <SearchResultsArea> <SearchResults /> </SearchResultsArea> </SongsContextArea>)
    
    const container = screen.getByRole('playlistContainer')
    const song =  screen.getByText(songText).parentElement.parentElement;
    const button = song.querySelector('button')

    expect(container).toBeEmptyDOMElement()

    act(() => {
        userEvent.click(button)
    })
    
    const addedSongBox = await screen.findByRole('AddedTrack')

    expect(container).not.toBeEmptyDOMElement()
    expect(addedSongBox).toBeInTheDocument()
    expect(button).toBeDisabled()
})