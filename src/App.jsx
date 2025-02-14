import React, { useState, useEffect } from 'react'
import Search from './components/search'
import Loader from './components/Loader';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';

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
  const[movies, setMovies] = useState([]);
  const[loading, setLoading] = useState(false);
  const[debounceTerm, setDebounceTerm] = useState('');

  useDebounce (() => setDebounceTerm(search), 600, [search]);

  const fetchMovies = async(query = '') => {
    setLoading(true);
    setError('');
    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error('Error: Failed to fetch movies');
      }
      const data = await response.json(); 
      if (data.Response === 'False') {
        setError(data.Error || 'Failed to fetch movies');
        setMovies([]);
        return;
      }
      setMovies(data.results || []);
    }
    catch (error) {
      setError('Error fetching the movies, please try again later.');
    } finally {
      setLoading(false);
    }
  }

  useEffect (() => {
    fetchMovies(debounceTerm);
  }, [debounceTerm]);

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
          <h2 className = 'mt = [50px]'> All Movies </h2>

          {loading ? (
            <Loader />
          ) : error ? (
            <p className = 'text-red-50'>{error}</p>
          ) : (
            <ul>
              {movies.map((movie) => (
                <MovieCard key = {movie.id} movie = {movie}/>
              ))}
            </ul>
          )}

        </section>
      </div>

    </main>
  )
}

export default App