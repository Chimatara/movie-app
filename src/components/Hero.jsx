import React, { useEffect, useState } from "react";
import axios from "axios";
import Berries from "./images/PngItem_1381056 1.svg";
import Button from "./Button";
import Header from "./Header";
import IMDB from "./images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
// import MovieCards from "./MovieCards";


const Hero = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const API_KEY = "2659442cafe0cfd770d40b8bde6f1c8a";
  const BASE_URL = "https://api.themoviedb.org/3/movie/top_rated?";

  useEffect(() => {
    const getData = async (searchQuery) => {
      const apiUrl = `${BASE_URL}&query=${encodeURIComponent(
        searchQuery
      )}&api_key=${API_KEY}`;
      try {
        const response = await axios.get(apiUrl);
        setData(response.data.results);
        // console.log(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchQuery]);

  return (
    <div className="heroi">
        <Carousel
          showThumbs={false}
          autoPlay={false}
          infiniteLoop={false}
          showIndicators={false}  >
            {
             data &&
              data.map(movie => (
                <div className="hero" style={{backgroundImage: `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no repeat'}}>
                   <Header data={data}/>
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
        </Carousel>
        
      <Button />

    </div>
  );
};

export default Hero;
