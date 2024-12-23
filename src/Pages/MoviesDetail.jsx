import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MoviesDetail = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === Number(id));

    if (!movie) return <p>Movie not found</p>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title={movie.title}
                allowFullScreen
            ></iframe>
            <br />
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default MoviesDetail;