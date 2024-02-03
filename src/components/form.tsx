import React, { useState } from "react";

const addMovies = async (movieDetails: Movie) => {
    // Prevents form from doing its default submission bullshit.

    const response = await fetch("http://localhost:3001", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(movieDetails),
    });
    return response.json();
};

type Movie = {
    title: string;
    description: string;
    runtime: number;
};

export const MovieForm = () => {
    const [movieDetails, setMovieDetails] = useState<Movie>({
        title: "",
        description: "",
        runtime: 0,
    });
    console.log(movieDetails);
    return (
        <form
            onSubmit={(event) => {
                addMovies(movieDetails);
                event.preventDefault();
            }}
        >
            <label>
                Title:{" "}
                <input
                    type="text"
                    name="title"
                    value={movieDetails.title}
                    onChange={(e) =>
                        setMovieDetails((old) => ({
                            ...movieDetails,
                            title: e.target.value,
                        }))
                    }
                />
            </label>
            <label>
                Description:{" "}
                <input
                    type="text"
                    name="description"
                    value={movieDetails.description}
                    onChange={(e) =>
                        setMovieDetails((old) => ({
                            ...movieDetails,
                            description: e.target.value,
                        }))
                    }
                />
            </label>
            <label>
                Runtime:{" "}
                <input
                    type="text"
                    value={movieDetails.runtime}
                    onChange={(e) =>
                        setMovieDetails((old) => ({
                            ...movieDetails,
                            runtime: parseInt(e.target.value),
                        }))
                    }
                />
            </label>
            <button type="submit">Add Movie</button>
        </form>
    );
};
