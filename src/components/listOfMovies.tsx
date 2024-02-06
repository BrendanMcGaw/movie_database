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
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Runtime</th>
                </tr>
                {movies.map((movie) => (
                    <tr key={movie.id}>
                        <td>{movie.title}</td>
                        <td>{movie.description}</td>
                        <td>{movie.runtime}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
