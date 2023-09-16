import React from 'react'
import Berries from "./images/PngItem_1381056 1.svg";
import IMDB from "./images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";

const formatRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}min`;
}



const MovieDetails = ({data}) => {
  return (
    <div className='movie-details'>
       {/* {loading && <div className='spin'>loading...</div>}
            {error && <div className='error'>{`We encountered a problem - ${error}`}</div>} */}
             {
             data &&
              data.map(movie => (
                <div className="hero"  data-testid="movie-poster" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no repeat'}}>
                   <div className="movie-name">
                   <h1 data-testid="movie-title">{movie.original_title}</h1>
                   <p data-testid="movie-release-date">{new Date(movie.release_date).toUTCString()}</p>
                   <p data-testid="movie-runtime">{formatRuntime(movie.runtime)}</p>
                 </div>
                 <div className="rating">
                    <div className="first">
                      <img src={IMDB} alt="" />
                      <p>{movie.vote_average}</p>
                    </div>
                    <div className="second">
                      <img src={Berries} alt="" />
                      <p>{movie.vote_count}</p>
                    </div>
                  </div>
                  <div className="movie-desc">
                    <p data-testid="movie-overview">
                      {movie.overview}
                    </p>
                  </div>
                 </div>
                )
              )
            }  
    </div>
  )
}

export default MovieDetails