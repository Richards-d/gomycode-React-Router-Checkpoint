import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetail from './Pages/MoviesDetail';
import "./App.css"

const App = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Inception',
            description: 'A mind-bending thriller by Christopher Nolan.',
            posterURL: "https://images.affiches-et-posters.com//albums/3/4532/medium/4532-affiche-film-inception-cast.jpg",
            rating: 5,
            trailer: 'https://www.youtube.com/embed/YoHD9XEInc0',
        },
        {
            id: 2,
            title: 'Interstellar',
            description: 'A space exploration journey by Christopher Nolan.',
            posterURL: "https://images.affiches-et-posters.com//albums/3/24296/medium/affiche-film-interstellar-sea-88024.jpg",
            rating: 4.5,
            trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
        },
    ]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
                <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
            </Routes>
        </Router>
    );
};

export default App;