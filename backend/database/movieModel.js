const db = require("./db.js");

const addMovie = (title, description, runtime, year, poster) => {
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

const getSpecificMovie = ({ id }) => {
    return db("movies").where({ id }).select("*");
};

const getFilteredData = (movieQuery) => {
    const formattedQuery = `%${movieQuery}%`; // allows for case insensitive queries
    return db("movies").whereILike("title", formattedQuery).select("*");
};

const updateMovie = (title, description, runtime, year, poster, movieId) => {
    return db("movies").where({ id: movieId }).update({
        title: title,
        description: description,
        runtime: runtime,
        year: year,
        poster: poster,
    });
};

const deleteMovie = (movieId) => {
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
