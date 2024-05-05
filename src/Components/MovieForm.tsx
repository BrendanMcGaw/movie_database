import React, { useState } from "react";
import { Movie, postMovies } from "../Requests/MoviePost";
import { updateMovieFetch } from "../Requests/UpdateMovie";
import { useFetchMoviePoster } from "../Hooks/useFetchMoviePoster";
import { SubmitButton } from "./Buttons/Buttons";

export type MovieFormProps = {
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
    movieDetails.poster = useFetchMoviePoster(movieDetails);
    return (
        <form
            className="formContainer"
            onSubmit={(event) => {
                event.preventDefault(); // Prevents the default form submission behaviour
                setTimeout(() => {
                    console.log(
                        "The details for the movie to either update or add are: ",
                        movieDetails
                    );
                    handleClick();
                    window.location.reload();
                }, 2000); // Delay the execution by 2000 ms allowing time to find correct poster URL in fetch.
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
            <SubmitButton />
        </form>
    );
};
