import React, { useState, useEffect } from "react";

export const MovieList = () => {
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001");
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
            }
        };

        fetchData();
    }, []);

    // console.log(JSON.stringify(movies));
    return (
        <div>
            {movies.map((movie) => (
                <ul key={movie.id}>
                    <li>{movie.title}</li>
                    <li>{movie.description}</li>
                    <li>{movie.runtime}</li>
                </ul>
            ))}
        </div>
    );
};
