import * as streamingAvailability from "streaming-availability";
import { useState, useEffect } from "react";

type MovieDetails = {
    title: string;
    year: number;
    poster: string | undefined;
};

export const useFetchMoviePoster = async (
    movieDetails: MovieDetails,
    { findPoster }: { findPoster: Boolean }
) => {
    const [poster, setPoster] = useState<string | undefined>(
        movieDetails.poster
    );
    const RAPID_API_KEY = "5a2f8e5325mshe833c4848a88ff8p1e325cjsncda270182198";
    const client = new streamingAvailability.Client(
        new streamingAvailability.Configuration({
            apiKey: RAPID_API_KEY,
        })
    );
    const data = await client.showsApi.searchShowsByFilters({
        country: "au",
        keyword: "Godzilla",
        yearMin: 2014,
        yearMax: 2014,
        showType: "movie",
    });
    console.log(data);
    console.log(data.shows[0].imageSet.verticalPoster.w600);
    const movieImage: string = data.shows[0].imageSet.verticalPoster.w600;
    setPoster(movieImage);
    return poster;
};

// export const useFetchMoviePoster = (
//     movieDetails: MovieDetails,
//     { findPoster }: { findPoster: Boolean }
// ) => {
//     const [poster, setPoster] = useState<string | undefined>(
//         movieDetails.poster
//     );

//     // Change this from unreliable omdb to tmdb api, much more reliable, properly proportioned posters. More accurate information and regularly up to date.
//     const fetchMoviePoster = async () => {
//         try {
//             const response = await fetch(
//                 "https://streaming-availability.p.rapidapi.com/shows/search/filters?country=au&show_type=movie&year_max=2014&keyword=Godzilla&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and&year_min=2014",
//                 {
//                     method: "GET",
//                     headers: {
//                         "X-RapidAPI-Key":
//                             "5a2f8e5325mshe833c4848a88ff8p1e325cjsncda270182198",
//                         "X-RapidAPI-Host":
//                             "streaming-availability.p.rapidapi.com",
//                     },
//                     mode: "cors",
//                 }
//             );

//             if (response.ok) {
//                 const result = await response.json();
//                 console.log(result);
//             }
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//         } catch (err) {
//             console.error(err);
//             throw new Error(`Error fetching movie poster: ${err}`);
//         }
//     };
//     return poster;
// };
