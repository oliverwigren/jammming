//import SaveToSpotifyContainer from '../containers/SaveToSpotifyContainer.js'
import { getData } from '../components/SearchBar.js';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

it('Searches successfully', async () => {
    // mock
    // Arrange
    const token = 'BQAk5W8ftrpN0ujvBoCXfb1I1nDQECCg8psZ3l3cL7JsQ6UzBjijhKViPcW6WP6AMs0vCF6qni4Rflxu1wjo9Ph0yX77lRumSzQ0cKCaiOmxF54NPbmJg0zZJfIN9OaKjwGsmTpSgKsc8oT-8o92V9aobONUNK204b3d7_kwuS-fg5BIZiO474SHZbPEqglcPb0_oal8TZLFFxdA56aL1jFB_QFtDnXbo1CPCRHcrN0hxN3eUBqM-yxvHtCwmigEe00zBMLj84ACwQ'
    const searchWord = 'hello'
    // Act
    const actualResult = await getData(searchWord, token)
    // Assert
    expect(actualResult).toBeDefined()
})

it('', () => {
    // // mock
    // // Arrange
    // render(<SearchBar />)
    // const inputField = screen.getByRole('input')
    // const button = screen.getByRole('button')
    // // Act
    // //userEvent.type(inputField, '')
    // //userEvent.click(button)
    // // Assert
    
})