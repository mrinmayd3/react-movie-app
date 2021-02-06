import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

const FEATURED_URL = process.env.REACT_APP_FEATURED_API;

const SEARCH_URL = process.env.REACT_APP_SEARCH_API;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const preload = async () => {
    try {
      const response = await fetch(FEATURED_URL);
      const moviesR = await response.json();

      setMovies(moviesR.results);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    preload()
  }, []);


  const handleOnChange = e => {
    setSearchTerm(e.target.value);
  }


  const handleOnSubmit = e => {
    e.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_URL + searchTerm)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results);
        })

      setSearchTerm('');
    }
  }

  return (
    <>
      <header>
        <h1><a href='/' className='band'>.movies</a></h1>
        <form onSubmit={handleOnSubmit}>
          <input className='search' type='search' placeholder='Search for movies' value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 && movies.map(movie => (<Movie key={movie.id} {...movie} />))}
      </div>
    </>
  );
}

export default App;
