import React, { useState, useEffect } from "react";
import { MovieForm } from "./MovieForm";
import { Card } from "./MovieCards";
import { DeleteMovie } from "../Requests/DeleteMovie";
import { Link } from "react-router-dom";

export const MovieList = () => {
    const [movies, setMovies] = useState<any[]>([]);
    // Probably want to lift the state to the parent app so that each update button is independent of the others.
    const [showUpdateMovieForm, setShowUpdateMovieForm] = useState(false);
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
                                onClick={() =>
                                    setShowUpdateMovieForm(!showUpdateMovieForm)
                                }
                            >
                                {showUpdateMovieForm ? "Hide " : "Show "}
                                Update
                            </button>
                            {showUpdateMovieForm ? (
                                <MovieForm
                                    updateMode={true}
                                    movieId={movie.id}
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
