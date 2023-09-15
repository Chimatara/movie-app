import React from "react";
import IMDB from './images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg'
import Berries from './images/PngItem_1381056 1.svg'

const Rating = ({ratingDivStyle}) => {
  return (
    <div className="rating" style={ratingDivStyle}>
      <div className="first">
         <img src={IMDB} alt="" />
        <p>860/100</p>
      </div>
      <div className="second">
        <img src={Berries} alt="" />
        <p>97%</p>
      </div>
    </div>
  );
};

export default Rating;
