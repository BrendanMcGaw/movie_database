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
    return (
        <form
            className="formContainer"
            onSubmit={(event) => {
                console.log(movieDetails);
                addMovies(movieDetails);
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
                    onChange={(e) =>
                        setMovieDetails((old) => ({
                            ...movieDetails,
                            title: e.target.value,
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
                    onChange={(e) =>
                        setMovieDetails((old) => ({
                            ...movieDetails,
                            description: e.target.value,
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
                    onChange={(e) =>
                        setMovieDetails((old) => ({
                            ...movieDetails, // spread operator allows us to put our new inputs to the front of the target.value column, giving us our new movieDetails runtime
                            runtime: parseInt(e.target.value),
                        }))
                    }
                />
            </label>
            <button className="formButton" type="submit">
                Add Movie
            </button>
        </form>
    );
};
