import React from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';


const Movie = ({ title, poster_path, vote_average, overview }) => {

    const setVoteclass = vote => {
        if (vote >= 8) {
            return 'green'
        } else if (vote >= 6) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
        <div className='movie'>
            <img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'} alt={title} />
            <div className='movie-info'>
                <h3>{title}</h3>
                <span className={`tag ${setVoteclass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className='movie-overview'>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;