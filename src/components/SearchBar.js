import React from 'react';

// const handleChange = ({target}) => {
//     setSearch(target.value);
// }

function SearchBar() {
    return (
        <div>
            <form>
                <input type='text' />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;