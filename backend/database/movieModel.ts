import { db } from "./knex/db";
// const db = require("./knex/db.ts");

type MovieId = { id: number };
export type MovieProperties = {
    title: string;
    description: string;
    runtime: number;
    year: number;
    poster: string;
    horizontalBackdrop: string;
    directors: string;
    actors: string;
    rating: number;
    genres: string;
    reviews: string;
    trailer: string;
    whereToWatch: string;
    imdbId: string;
    tmdbId: string;
    youtubeTrailer: string;
    youtubeTrailerThumbnail: string;
};
const addMovie = (
    title: string,
    description: string,
    runtime: number,
    year: number,
    poster: string,
    horizontalBackdrop: string,
    directors: string,
    actors: string,
    rating: number,
    genre: string,
    reviews: string,
    trailer: string,
    whereToWatch: string,
    imdbId: string,
    tmdbId: string,
    youtubeTrailer: string,
    youtubeTrailerThumbnail: string
) => {
    return db("movies").insert({
        title: title,
        description: description,
        runtime: runtime,
        year: year,
        poster: poster,
        horizontalBackdrop: horizontalBackdrop,
        directors: directors,
        actors: actors,
        rating: rating,
        genre: genre,
        reviews: reviews,
        trailer: trailer,
        whereToWatch: whereToWatch,
        imdbId: imdbId,
        tmdbId: tmdbId,
        youtubeTrailer: youtubeTrailer,
        youtubeTrailerThumbnail: youtubeTrailerThumbnail,
    });
};

const getAllMovies = () => {
    return db("movies").select("*");
};

const getSpecificMovie = ({ id }: MovieId) => {
    return db("movies").where({ id }).select("*");
};

const getFilteredData = (movieQuery: string) => {
    const formattedQuery = `%${movieQuery}%`; // allows for case insensitive queries
    return db("movies").whereILike("title", formattedQuery).select("*");
};

const updateMovie = (
    title: string,
    description: string,
    runtime: number,
    year: number,
    poster: string,
    movieId: number
) => {
    return db("movies").where({ id: movieId }).update({
        title: title,
        description: description,
        runtime: runtime,
        year: year,
        poster: poster,
    });
};

const deleteMovie = (movieId: number) => {
    return db("movies").where({ id: movieId }).del();
};

module.exports = {
    addMovie,
    getAllMovies,
    deleteMovie,
    updateMovie,
    getSpecificMovie,
    getFilteredData,
};
