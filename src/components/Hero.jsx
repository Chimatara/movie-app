
import Berries from "./images/PngItem_1381056 1.svg";
import Button from "./Button";
import Header from "./Header";
import IMDB from "./images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



const Hero = ({data, error, loading}) => {

  return (
    <div className="heroi">
       {loading && <div className='spin'>Loading....</div>}
            {error && <div className='error'>{`We encountered a problem - ${error}`}</div>}
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
