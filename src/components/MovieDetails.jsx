import React from 'react'
import Berries from "./images/PngItem_1381056 1.svg";
import IMDB from "./images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";

const MovieDetails = ({data}) => {
  return (
    <div className='movie-details'>
             {
             data &&
              data.map(movie => (
                <div className="hero" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no repeat'}}>
                   <div className="movie-name">
                   <h1>{movie.original_title}</h1>
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
                    <p>
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