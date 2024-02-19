import { Movie } from "./MoviePost"; // Movie is our type.

export const updateMovieFetch = async (
    movieDetails: Movie,
    movieId: number
) => {
    const response = await fetch(
        `http://localhost:3001/movies/updateMovies/${movieId}`,
        {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(movieDetails),
        }
    );
    console.log(movieDetails);
    return response.json();
};

//TODO: Check react native weather app for file structure regarding fetch / http request method setup.
