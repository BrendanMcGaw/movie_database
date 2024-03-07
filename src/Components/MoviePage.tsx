import { useState, useEffect } from "react";

export const MoviePage = () => {
    const [movie, setMovie] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/movies/getMovies/"
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {movie.map((movieData) => (
                <div key={movieData.id}>
                    <img src={movieData.poster} alt="" />
                    <h1>{movieData.title}</h1>
                    <h3>{movieData.description}</h3>
                    <p>{movieData.runtime}</p>
                    <p>{movieData.year}</p>
                </div>
            ))}
        </div>
    );
};
