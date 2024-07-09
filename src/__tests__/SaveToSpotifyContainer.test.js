import SaveToSpotifyContainer from '../containers/SaveToSpotifyContainer.js';
import SpotifyAuth from '../components/SpotifyAuth.js'
import { getUserId } from '../containers/SaveToSpotifyContainer.js';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

it("Gets user id", async () => {
  //mock

  //Arrange
  //const button = screen.getByRole('button', {name: /savetospotify/i})
  const expectedResult = 'bjf5xcwcmc5wz5soxpr6f71um'
  // Access token
  const token = 'BQAk5W8ftrpN0ujvBoCXfb1I1nDQECCg8psZ3l3cL7JsQ6UzBjijhKViPcW6WP6AMs0vCF6qni4Rflxu1wjo9Ph0yX77lRumSzQ0cKCaiOmxF54NPbmJg0zZJfIN9OaKjwGsmTpSgKsc8oT-8o92V9aobONUNK204b3d7_kwuS-fg5BIZiO474SHZbPEqglcPb0_oal8TZLFFxdA56aL1jFB_QFtDnXbo1CPCRHcrN0hxN3eUBqM-yxvHtCwmigEe00zBMLj84ACwQ'
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

it('Song-boxes disappear on submit', async () => {

})