import React, { useState, useEffect } from 'react'
import Search from './components/search'
import Loader from './components/Loader';
import MovieCard from './components/MovieCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDebounce } from 'react-use';
import { getTrendingMovies, searchCount } from './appwrite';

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
  const[trendingMovies, setTrendingMovies] = useState([]);

  useDebounce (() => setDebounceTerm(search), 1000, [search]);

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
      if(query && data.results.length > 0) {
        await searchCount(query, data.results[0]);
      }
    }
    catch (error) {
      setError('Error fetching the movies, please try again later.');
    } finally {
      setLoading(false);
    }
  }

  const loadTrendingMovies = async() => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch(error) {
      console.error(`Error fetching trending movies ${error}`)
    }
  }

  useEffect (() => {
    fetchMovies(debounceTerm);
  }, [debounceTerm]);

  useEffect (() => {
    loadTrendingMovies();
  }, []);

  const settings = {
    dots: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main>
      <div className = "pattern" />
      <div className = "wrapper">
        <header>
          <h1> Find <span className = "text-gradient">Movies</span> In An Instant </h1>
          <Search search = {search} setSearch = {setSearch}/>
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <Slider {...settings}>
              {trendingMovies.map((movie, index) => (
                <div key={movie.$id} className="movie-slide">
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </div>
              ))}
            </Slider>
          </section>
        )}


        <section className = "all-movies">
          <h2> All Movies </h2>

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