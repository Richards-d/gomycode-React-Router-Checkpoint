// This component allows users to filter movies by title and rating.

import React, { useState } from 'react';

const Filter = ({ setSearchTitle, setSearchRating }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);

    const handleSearch = () => {
        setSearchTitle(title);
        setSearchRating(rating);
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search by title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Search by rating"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
            />
            <button onClick={handleSearch}>Filter</button>
        </div>
    );
};

export default Filter;