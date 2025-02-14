import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className = "search">
        <div>
        <img src = 'search.svg' alt = "search" />
        <input 
            type='text'
            placeholder='Search a movie'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
        </div>
    </div>
  )
}

export default Search