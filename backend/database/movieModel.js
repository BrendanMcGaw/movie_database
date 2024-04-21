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

const getSearchResult = ({ title }) => {
    return db("movies").where({ title }).select("*");
};

const updateMovie = (title, description, runtime, year, poster, movieId) => {
    // TODO: I believe the movieId parameter is incorrect.
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
};
