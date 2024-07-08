import SaveToSpotifyContainer from '../containers/SaveToSpotifyContainer.js'
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

it("Gets user id", async () => {
  //mock

  //Arrange
  //Act
  //render(<SaveToSpotifyContainer></SaveToSpotifyContainer>)
  const expectedResult = await getUserId(token);
  //Assert
});

it('Song-boxes disappear on submit', () => {

})