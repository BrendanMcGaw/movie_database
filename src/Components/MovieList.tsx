import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
    const [movies, setMovies] = useState<any[]>([]);
    // Probably want to lift the state to the parent app so that each update button is independent of the others.
    const [showUpdateMovieForm, setShowUpdateMovieForm] = useState<{
        [id: number]: boolean;
    }>({});
    const [showFullDescription, setShowFullDescription] = useState<{
        [id: number]: boolean;
    }>({}); // is to say that this is an object, where each key is a number, and each value is a boolean.

    const showFullDescriptionHandler = (movieId: number) => {
        setShowFullDescription((prevState) => ({
            ...prevState,
            [movieId]: !prevState[movieId],
        }));
        console.log(showFullDescription);
    };

    const toggleUpdateForm = (movieId: number) => {
        setShowUpdateMovieForm((prevState) => ({
            ...prevState,
            [movieId]: !prevState[movieId],
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/movies/getMovies/"
                );
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
        <div className="pageContentContainer">
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    showFullDescriptionHandler={showFullDescriptionHandler}
                    toggleUpdateForm={toggleUpdateForm}
                    showUpdateMovieForm={showUpdateMovieForm}
                    showFullDescription={showFullDescription}
                />
            ))}
        </div>
    );
};
