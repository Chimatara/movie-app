// import { useState } from 'react''
import './App.css'
import FetchData from './components/FetchData'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

function App() {
  // const [count, setCount] = useState(0)

  return (
     <Router>
        <Routes>
         <Route to='/moviedetails/:id' Component={<MovieDetails />} />
        </Routes>
        <FetchData />
        <Footer />
     </Router>
  )
}

export default App
