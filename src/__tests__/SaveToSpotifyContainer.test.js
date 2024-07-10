import SaveToSpotifyContainer from '../containers/SaveToSpotifyContainer.js';
import SpotifyAuth from '../components/SpotifyAuth.js'
import { getUserId, createPlaylist, addToPlaylist, configInfoText } from '../containers/SaveToSpotifyContainer.js';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { getMockAT, getMockID, getMockPlaylistID } from '../__mocks__/getMockData.js';

it("Gets user id", async () => {
  //mock

  //Arrange
  //const button = screen.getByRole('button', {name: /savetospotify/i})
  const expectedResult = 'bjf5xcwcmc5wz5soxpr6f71um'
  // Access token
  const token = getMockAT()
  //Act
  // render(<SpotifyAuth/>)
  // render(<SaveToSpotifyContainer></SaveToSpotifyContainer>)
  // screen.debug()
  // userEvent.click(button)
  const actualResult = await getUserId(token);
  //Assert
  expect(actualResult).toBeDefined()
  expect(actualResult).toBe(expectedResult)
});

it('Creates playlist', async () => {
  // Arrange
  const expectedResult = getMockPlaylistID()
  const id = getMockID
  const token = getMockAT
  const name = 'Playlist'
  // Act
  const actualResult = await createPlaylist(id, token, name)
  // Assert
  expect(actualResult).toBeDefined()
  expect(actualResult).toBe(expectedResult)
  expect(actualResult).not.toEqual(1)

})

// it('Shows red error text', () => {
//   // Arrange
//   const text = 'Error, something went wrong'
//   const color = 'red'
//   // Act
//   configInfoText(text, true)
//   const textElement = screen.getByText(text)
//   // Assert
//   expect(textElement).toBeInTheDocument()
//   expect(textElement.innerHTML).toBe(text)
//   expect(textElement.style.color).toBe(color)
// })
// it('shows white success text', () => {

// })

// it('Song-boxes disappear on submit', async () => {

// })