import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import MovieOption from "./MovieOption";
import MovieCards from "./MovieCards";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";

const FetchData = () => {
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
        console.log(response.data);
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

  const moviesToShow = data ? data.slice(0, 10) : [];
  const detailsToShow = data ? data.slice(0, 1) : [];

  return <div>
            <Hero data={data} />
            <MovieOption />
            <MovieCards data={moviesToShow} />
            <MovieDetails data={detailsToShow} />
        </div>;
};

export default FetchData;
