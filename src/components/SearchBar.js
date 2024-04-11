import React from 'react';

// const handleChange = ({target}) => {
//     setSearch(target.value);
// }

const handleSubmit = (e) => {
    e.preventDefault();
}

function SearchBar() {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;