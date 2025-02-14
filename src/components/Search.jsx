import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className = "search">
        <div>
        <img src = 'glass.png' alt = "search" />
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