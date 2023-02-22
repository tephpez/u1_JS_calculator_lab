import './App.css';
import { useState, useEffect } from 'react';
import Calculator from './components/Calculator'
import axios from 'axios'
import { BASE_URL } from './globals';

const App = () => {
  const [movies, setMovies] = useState ([])
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect (() => {
    const getMovies = async () => {
      const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)     // WAIT TIL THE DATA COMES BACK, THEN RENDER IT ON SCREEN
      console.log(response.data.results)
    }
    getMovies()
  }, [])
}

function App() {



  return (
    <div className="App">
      <Calculator
      />
    </div>
  );
}



export default App;
