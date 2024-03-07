import React, { useState, useEffect } from "react";
import { Movie, postMovies } from "../Requests/MoviePost";
import { updateMovieFetch } from "../Requests/UpdateMovie";

type MovieFormProps = {
    updateMode: boolean;
    movieId: number;
    showAddMovie: boolean;
    moviePoster: string;
};

export const MovieForm = ({
    updateMode,
    movieId,
    showAddMovie,
}: MovieFormProps) => {
    const [movieDetails, setMovieDetails] = useState<Movie>({
        title: "",
        description: "",
        runtime: 0,
        year: 0,
        poster: "",
    });

    const handleClick = () => {
        if (showAddMovie === true && updateMode === false) {
            postMovies(movieDetails);
            console.log(
                "showAddMovie state is: ",
                showAddMovie,
                "updateMode state is: ",
                updateMode
            );
        } else if (updateMode === true) {
            updateMovieFetch(movieDetails, movieId);
            console.log(
                "showAddMovie state is: ",
                showAddMovie,
                "updateMode state is: ",
                updateMode
            );
        }
    };

    useEffect(() => {
        const fetchMoviePoster = async () => {
            try {
                // find a way to do 2 fetches. If the movieDetails.year doesn't == a true result then do the fetch for just the movie parameter.
                console.log(movieDetails.title, movieDetails.year);
                const response = await fetch(
                    `http://www.omdbapi.com/?apikey=14cbc6df&t=${movieDetails.title}&y=${movieDetails.year}`
                );
                // Check result for title == true and year == true. Otherwise ignore year.
                console.log(
                    "This is the result of fetching title and year:",
                    response
                );
                const result = await response.json();
                console.log(
                    "This is the result of fetching title and year: ",
                    result
                );
                movieDetails.poster = result.Poster; // If title and year are accurate, this will get the correct poster dependent on the year of release.
                if (
                    result.Response === "False" &&
                    result.Error === "Movie not found!"
                ) {
                    const response = await fetch(
                        `http://www.omdbapi.com/?apikey=14cbc6df&t=${movieDetails.title}`
                    );
                    const result = await response.json();
                    console.log(
                        "This is the result of fetching the title only:",
                        result
                    );
                    movieDetails.poster = result.Poster; // If only the title is correct, it will still grab the default poster for the movie title listed.
                }
            } catch (error) {
                console.log("Error fetching data from omdb.", error);
                movieDetails.poster = "Could not find movie."; // Add this as alt text or maybe a short plot for each film?
            }
        };
        if (movieDetails.title && movieDetails.year) {
            fetchMoviePoster();
        }
    });

    return (
        <form
            className="formContainer"
            onSubmit={(event) => {
                console.log(
                    "The details for the movie to either update or add are: ",
                    movieDetails
                );
                handleClick();
                // event.preventDefault();
            }}
        >
            <label className="inputContainer">
                Title:{""}
                <input
                    required
                    type="text"
                    name="title"
                    value={movieDetails.title}
                    onChange={(event) =>
                        setMovieDetails((old) => ({
                            ...movieDetails,
                            title: event.target.value,
                        }))
                    }
                />
            </label>
            <label className="inputContainer">
                Description:{" "}
                <input
                    required
                    type="text"
                    name="description"
                    value={movieDetails.description}
                    onChange={(event) =>
                        setMovieDetails((old) => ({
                            ...movieDetails,
                            description: event.target.value,
                        }))
                    }
                />
            </label>
            <label className="inputContainer">
                Runtime:{" "}
                <input
                    required
                    type="text"
                    value={movieDetails.runtime}
                    onChange={(event) =>
                        setMovieDetails((old) => ({
                            ...movieDetails, // spread operator allows us to put our new inputs to the front of the target.value column, giving us our new movieDetails runtime
                            runtime: parseInt(event.target.value),
                        }))
                    }
                />
            </label>
            <label className="inputContainer">
                Year:{" "}
                <input
                    required
                    type="text"
                    value={movieDetails.year}
                    onChange={(event) =>
                        setMovieDetails((old) => ({
                            ...movieDetails, // spread operator allows us to put our new inputs to the front of the target.value column, giving us our new movieDetails runtime
                            year: parseInt(event.target.value),
                        }))
                    }
                />
            </label>
            <button
                className="formButton"
                type="submit"
                onClick={(event) => {
                    console.log(movieDetails);
                    setMovieDetails((old) => ({
                        ...movieDetails,
                        poster: movieDetails.poster,
                    })); // Is being seen in the console log but not added to database.
                }}
            >
                Submit
            </button>
        </form>
    );
};
