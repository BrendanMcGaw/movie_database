import React, { useState, useEffect } from "react";
import { MovieForm } from "./MovieForm";
import { Card } from "./MovieCards";
import { DeleteMovie } from "../Requests/DeleteMovie";
import { Link } from "react-router-dom";

export const MovieList = () => {
    const [movies, setMovies] = useState<any[]>([]);
    // Probably want to lift the state to the parent app so that each update button is independent of the others.
    const [showUpdateMovieForm, setShowUpdateMovieForm] = useState<{
        [key: number]: boolean;
    }>({});
    const [showFullDescription, setShowFullDescription] = useState<{
        [key: number]: boolean;
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
                <div key={movie.id}>
                    <Card>
                        <img
                            className="moviePosters"
                            src={movie.poster}
                            alt={"Hero-Movie Poster"}
                        />
                        <Link to={`/movie/${movie.id}`} className="year">
                            {movie.year}
                        </Link>
                        <p className="description">
                            {showFullDescription[movie.id]
                                ? movie.description
                                : movie.description.slice(0, 100)}
                        </p>
                        <button
                            className="readMoreButton"
                            onClick={() => {
                                showFullDescriptionHandler(movie.id);
                            }}
                        >
                            {showFullDescription[movie.id]
                                ? "Read Less"
                                : "Read More"}
                        </button>
                        {/* TODO: Basic read more implementation. Needs to look cleaner and change from Read More to Read Less to shrink. 
                        Should also be state lifted in order to individualize each read more button so that it doesn't expand them all at once. */}
                        <p className="runtime">
                            Runtime: {movie.runtime} minutes
                        </p>

                        <footer className="cardButtonContainer">
                            <button
                                className="updateButton"
                                onClick={() => {
                                    toggleUpdateForm(movie.id);
                                    console.log(movie.id); // is logging which movie.id we're clicking on, but TODO: Not updating the correct one assosciated with the movie.id
                                }}
                            >
                                {showUpdateMovieForm[movie.id]
                                    ? "Hide "
                                    : "Show "}
                                Update
                            </button>
                            {showUpdateMovieForm[movie.id] ? (
                                <MovieForm
                                    updateMode={true}
                                    movieId={movie.id} // this is not passing correctly?
                                    showAddMovie={false}
                                    moviePoster=""
                                />
                            ) : null}
                            <button
                                className="deleteButton"
                                onClick={() => DeleteMovie(movie.id)}
                            >
                                Delete
                            </button>
                        </footer>
                    </Card>
                </div>
            ))}
        </div>
    );
};
