import { useState, useEffect } from "react";

type MovieDetails = {
    title: string;
    year: number;
    poster: string | undefined;
};

export const useFetchMoviePoster = (
    movieDetails: MovieDetails,
    { findPoster }: { findPoster: Boolean }
) => {
    const [poster, setPoster] = useState<string | undefined>(
        movieDetails.poster
    );

    // Change this from unreliable omdb to tmdb api, much more reliable, properly proportioned posters. More accurate information and regularly up to date.
    const fetchMoviePoster = async () => {
        const url =
            "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=AU&show_type=movie&year_max=2014&keyword=Godzilla&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and&year_min=2014";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "5a2f8e5325mshe833c4848a88ff8p1e325cjsncda270182198",
                "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
                "Content-Type": "application/json",
            },
        };
        // Check back tomorrow. This is the correct way to fetch the data.
        try {
            console.log("These are the correct options being used", options);
            const response = await fetch(url, options);
            if (!response.ok) {
                console.log(response);
                throw new Error(`HTTP error status: ${response.status}`);
            }
            console.log(response);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        // const response = await fetch(
        //     `http://www.omdbapi.com/?apikey=14cbc6df&t=${movieDetails.title}&y=${movieDetails.year}`
        // );
        // const response = await fetch(
        //     `https://streaming-availability.p.rapidapi.com/shows/search/filters?country=AU&show_type=movie&year_max=2014&keyword=Godzilla&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and&year_min=2014`,
        //     options
        // );
        // console.log("This is the response from the fetch: ", response);
        // console.log(
        //     await fetch(
        //         `https://streaming-availability.p.rapidapi.com/shows/search/filters?country=AU&show_type=movie&year_max=${movieDetails.year}&keyword=${movieDetails.title}&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and&year_min=${movieDetails.year}`,
        //         options
        //     )
        // );
        // // Check result for title == true and year == true. Otherwise ignore year.
        // const result = await response.text();
        // // If title and year are accurate, this will get the correct poster dependent on the year of release.
        // console.log(
        //     "This is the result of fetching the title only:",
        //     result
        // );
        // setPoster(result);
        // if (
        //     {
        //         shows: [],
        //         hasMore: false,
        //     }
        // ) {
        //     // If year is not accurate, ignore year and search for title only.
        //     const response = await fetch(
        //         `https://streaming-availability.p.rapidapi.com/shows/search/title?country=AU&title=${movieDetails.title}&output_language=en&show_type=movie&series_granularity=show}`
        //     );
        //     const result = await response.text();
        //     console.log(
        //         "This is the result of fetching the title only:",
        //         setPoster(result)
        //     );
        //     setPoster(result); // If only the title is correct, it will still grab the default poster for the movie title listed.
        // }
    };
    useEffect(() => {
        if (findPoster) {
            fetchMoviePoster();
            console.log(
                "This is what our fetchmoviePoster is doing: ",
                fetchMoviePoster()
            );
        }
    });
    return poster;
};
// Potentially transition APIs to this one instead.
// https://developer.themoviedb.org/docs/getting-started
