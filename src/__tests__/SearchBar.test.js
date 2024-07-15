import { getData } from '../components/SearchBar.js';
import '@testing-library/jest-dom'
import { getMockAT, getMockTracksFromSearch } from '../__mocks__/getMockData.js'

it('Searches successfully', async () => {
    // Arrange
    const token = getMockAT()
    const searchWord = 'hello'
    const expectedResult = getMockTracksFromSearch()
    // Act
    const actualResult = await getData(searchWord, token)
    // Assert
    expect(actualResult).toBeDefined()
    expect(actualResult.tracks.items.length).toEqual(10)
    expect(actualResult).toEqual(expectedResult)
    expect(actualResult).not.toEqual(1)
    expect(actualResult).not.toEqual(2)
})

it('Search fails as there is no search word', async () => {
    const token = getMockAT()
    const searchWord = ''
    // Act
    const actualResult = await getData(searchWord, token)
    // Assert
    expect(actualResult).toBeDefined()
    expect(actualResult).toEqual(1)
})