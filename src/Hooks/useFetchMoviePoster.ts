import { useState, useEffect } from "react";

type MovieDetails = {
    title: string;
    year: number;
    poster: string | undefined;
};
// Rendering numerous times, because i'm rendering it in the movieList. When I should be only using it once in my MovieForm when I submit the movie. Then it should stay in our table.
// CSS is fucked atm. Hoping to fix that with the fixing of my fetch issue.
export const useFetchMoviePoster = (movieDetails: MovieDetails) => {
    const [poster, setPoster] = useState<string | undefined>(
        movieDetails.poster
    );

    useEffect(() => {
        const fetchMoviePoster = async () => {
            try {
                const response = await fetch(
                    `http://www.omdbapi.com/?apikey=14cbc6df&t=${movieDetails.title}&y=${movieDetails.year}`
                );
                // Check result for title == true and year == true. Otherwise ignore year.
                console.log(
                    "This is the result of fetching title and year:",
                    response // if in doubt, log it out.
                );
                const result = await response.json();
                console.log(
                    "This is the result of fetching title and year: ",
                    result
                );
                setPoster(result.Poster); // If title and year are accurate, this will get the correct poster dependent on the year of release.
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
                    setPoster(result.Poster); // If only the title is correct, it will still grab the default poster for the movie title listed.
                } else {
                    setPoster(result.Poster);
                }
            } catch (error) {
                console.log("Error fetching data from omdb.", error);
                setPoster("Could not find movie."); // Add this as alt text or maybe a short plot for each film?
            }
        };
        if (movieDetails.title) {
            fetchMoviePoster();
        }
    }, [movieDetails.title, movieDetails.year]);

    return poster;
};

// Potentially transition APIs to this one instead.
// https://developer.themoviedb.org/docs/getting-started
