import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className = "search">
        <img src = './search.svg' />
        <input 
            type='text'
            placeholder='Search a movie'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
    </div>
  )
}

export default Search