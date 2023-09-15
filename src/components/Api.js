
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards';

const Api = () => {
  
  //   if (!data) {
  //     return <div>Loading...</div>; // You can render a loading message or component
  // }
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')

  const API_KEY = '2659442cafe0cfd770d40b8bde6f1c8a';
  const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?';
  
  // const handleSearch = (event) => {
  //   setSearchQuery(event.target.value);
  // }
   useEffect(() => {
     
      const getData = async (searchQuery) => {
          const apiUrl = `${BASE_URL}/search/movie?query=${encodeURIComponent(searchQuery)}&api_key=${API_KEY}`;
        try{
          const response = await axios.get(apiUrl);
          setData(response.data);
          console.log(response.data);
          setError(null)
        } catch(err){
          setError(err.message);
          setData(null)
        } finally{
          setLoading(false);
        }

      };
      getData()

    }, []);
  
  return (
    <div>
        <MovieCards data={data}/>
        
    </div>
  )
}

export default Api

  