import SaveToSpotifyContainer from '../containers/SaveToSpotifyContainer.js'
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

it('Searches successfully', () => {
    // mock
    // Arrange
    // Act
    // Assert
})

it('', () => {
    // mock
    // Arrange
    render(<SearchBar />)
    const inputField = screen.getByRole('input')
    const button = screen.getByRole('button')
    // Act
    //userEvent.type(inputField, '')
    //userEvent.click(button)
    // Assert
})