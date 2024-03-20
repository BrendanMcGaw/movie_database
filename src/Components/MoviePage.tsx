import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("LETS FETCH!!");
                // Getting TypeError failed to fetch.
                const response = await fetch(
                    `http://localhost:3001/movies/${id}`
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
            }
        };

        fetchData();
    }, [id]);

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
