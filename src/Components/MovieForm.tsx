import React, { useState } from "react";
import { Movie, postMovies } from "../Requests/MoviePost";
import { updateMovieFetch } from "../Requests/UpdateMovie";
import { SubmitButton } from "./Buttons/Buttons";
import * as streamingAvailability from "streaming-availability";

export type MovieFormProps = {
    updateMode: boolean;
    movieId: number;
    showAddMovie: boolean;
    moviePoster: string;
};

type MovieDetails = {
    title: string;
    year: number | undefined;
    description: string;
    poster: string | undefined;
    apiDescription: string;
    releaseYear: number | undefined;
    genres: string[];
    directors: string[] | undefined;
    actors: string[];
    whereToWatch: string[] | undefined;
    trailer: string;
    rating: number;
    reviews: string[];
    runtime: number;
};

// This works! I don't know why, I don't know how, but it works. I'm not going to touch it.
// TODO: No longer does this just get a poster, change this shit and please for the love of god, put it in its own
const GetThatPoster = async (movieDetails: MovieDetails) => {
    const RAPID_API_KEY = "5a2f8e5325mshe833c4848a88ff8p1e325cjsncda270182198";
    const client = new streamingAvailability.Client(
        new streamingAvailability.Configuration({
            apiKey: RAPID_API_KEY,
        })
    );
    const data = await client.showsApi.searchShowsByTitle({
        title: movieDetails.title,
        country: "au",
        showType: "movie",
    });

    console.log(JSON.stringify(data, null, 4));
    console.log(data[0].imageSet.verticalPoster.w600);
    movieDetails.poster = data[0].imageSet.verticalPoster.w600;
    if (movieDetails.description === "") {
        movieDetails.description = data[0].overview;
    }
    movieDetails.apiDescription = data[0].overview;
    if (movieDetails.year === 0) {
        movieDetails.year = data[0].releaseYear;
    }
    // movieDetails.genres = data[0].genres;
    movieDetails.directors = data[0].directors;
    movieDetails.actors = data[0].cast;
    // movieDetails.whereToWatch = data[0].streamingOptions.au[i]; iterate through each item in the array and find the name and url to get to the streaming service. REVIEW LOGS. TODO:Prooving to be a bit difficult to get this to work.
    // movieDetails.trailer = data[0].trailer; TODO:This will have to be obtained from a different API
    movieDetails.rating = data[0].rating;
    console.log(movieDetails.directors);
    console.log(movieDetails.actors);
};

//TODO: Works majority of the time, might need to check year, if year is provided, check for release date comparison. If no year provided or it doesn't match a release date of any of the objects in the array, then return the first poster in the array.
//TODO: Streaming-options is another property we want to look into using. In fact we're going to want to use a lot of this information for getting the cast, directors, where to watch, etc...
//TODO: Look into second API for getting movie trailers.

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
        apiDescription: "",
        releaseYear: 0,
        genres: [],
        directors: [],
        actors: [],
        whereToWatch: [],
        trailer: "",
        rating: 0,
        reviews: [],
    });
    // useFetchMoviePoster(movieDetails, { findPoster });

    const HandleClick = async () => {
        if (showAddMovie === true && updateMode === false) {
            await postMovies(movieDetails);
            showAddMovie = false; // resets the variable.
            updateMode = false; // resets the variable.
        } else if (updateMode === true) {
            await updateMovieFetch(movieDetails, movieId);
            updateMode = false; // resets the variable.
            showAddMovie = false; // resets the variable.
        }
    };

    return (
        <form
            className="formContainer"
            onSubmit={(event) => {
                event.preventDefault(); // Prevents the default form submission behaviour
                setTimeout(async () => {
                    await GetThatPoster(movieDetails);
                    await HandleClick(); // TODO:Getting a fetch error from this somehow, look into it further.
                    console.log(
                        "The details for the movie to either update or add are: ",
                        movieDetails
                    );
                    window.location.reload();
                }, 500); // Delay the execution by 2000 ms allowing time to find correct poster URL in fetch.
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
