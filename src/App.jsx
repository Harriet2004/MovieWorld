import React, { useState, useEffect } from 'react'
import Search from './components/search'

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const[search, setSearch] = useState('');

  return (
    <main>
      <div className = "pattern" />
      <div className = "wrapper">
        <header>
          <img src = "./hero-img.png"></img>
          <h1> Find <span className = "text-gradient">Movies</span> Without A Hassle </h1>
        </header>

        <Search search = {search} setSearch = {setSearch}/>
      </div>

    </main>
  )
}

export default App