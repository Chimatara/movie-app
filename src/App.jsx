// import { useState } from 'react''
import './App.css'
import FetchData from './components/FetchData'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import Movie from './components/Movie'

function App() {
  // const [count, setCount] = useState(0)

  return (
     <Router>
        <Routes>
         <Route to='/movies/:id' Component={<Movie />} />
        </Routes>
        <Movie />
        <FetchData />
        <Footer />
     </Router>
  )
}

export default App
