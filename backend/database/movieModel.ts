import { db } from "./knex/db";
// const db = require("./knex/db.ts");

type MovieId = { id: number };
type MovieProperties = {
    title: string;
    description: string;
    runtime: number;
    year: number;
    poster: string;
    directors: string;
    actors: string;
    rating: number;
    genre: string;
    reviews: string;
    trailer: string;
    whereToWatch: string;
};
const addMovie = (
    title: string,
    description: string,
    runtime: number,
    year: number,
    poster: string
) => {
    return db("movies").insert({
        title: title,
        description: description,
        runtime: runtime,
        year: year,
        poster: poster,
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
