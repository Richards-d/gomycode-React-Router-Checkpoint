
import React, { useState } from 'react';
import MovieList from '../Components/MovieList';
import Filter from '../Components/Filter';

const Home = ({ movies, setMovies }) => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchRating, setSearchRating] = useState(0);

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            movie.rating >= searchRating
    );

    const addMovie = () => {
        const newMovie = {
            id: movies.length + 1,
            title: 'New Movie',
            description: 'Description',
            posterURL: 'https://via.placeholder.com/150',
            rating: 5,
            trailer: 'https://www.youtube.com/embed/sample',
        };
        setMovies([...movies, newMovie]);
    };

    return (
        <div>
            <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
            <button onClick={addMovie}>Add New Movie</button>
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default Home;