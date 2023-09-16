import React from "react";
import Berries from "./images/PngItem_1381056 1.svg";
import IMDB from "./images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const MovieCards = ({data}) => {
  return (
    <div data-testid="movie-card" className="movie-cards">
      {data &&
        data.map((movie) => {
          return (
            <Link to={`/moviedetails/${movie.id}`} key={movie.id} style={{textDecoration: 'none', color: 'black'}}>
            <div className="movies">
              <img
                data-testid="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="poster"
              />
              <p data-testid="movie-release-date" className="location">
                {movie.release_date}
              </p>
              <h6 data-testid="movie-title">{movie.title}</h6>

              <div className="votes">
                <div className="imbd-logo">
                  <img src={IMDB} alt="" />
                  <p>{movie.vote_average}</p>
                </div>
                <div className="berries">
                  <img src={Berries} alt="" />
                  <p>{movie.vote_count}</p>
                </div>
              </div>
              <p style={{ paddingTop: "10px" }} className="genre">
                {movie.genre_ids}
              </p>
            </div>
         </Link>
          );
        })}
    </div>
    
  );
};

export default MovieCards;
