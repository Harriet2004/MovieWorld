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
  const[error, setError] = useState('');

  const fetchMovies = async() => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Error: Failed to fetch movies');
      }
      const data = await response.json(); 
      if (data.Response === 'False') {
        setError(data.Error || 'Failed to fetch movies');
      }
    }
    catch (error) {
      setError('Error fetching the movies, please try again later.');
    }
  }

  useEffect (() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className = "pattern" />
      <div className = "wrapper">
        <header>
          <img src = "./hero-img.png"></img>
          <h1> Find <span className = "text-gradient">Movies</span> Without A Hassle </h1>
          <Search search = {search} setSearch = {setSearch}/>
        </header>

        <section className = "all-movies">
          <h2> All Movies </h2>
          {error && <p>{error}</p>}
        </section>
      </div>

    </main>
  )
}

export default App