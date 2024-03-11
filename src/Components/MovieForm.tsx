import React, { useState } from "react";
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
                "The movieId is:",
                movieId, // movieId is straight wrong. TODO: Figure it out.
                "updateMode state is: ",
                updateMode
            );
        }
    };

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
