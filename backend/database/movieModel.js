const db = require("./db.js");

const addMovie = (title, description, runtime) => {
    return db("movies").insert({
        title: title,
        description: description,
        runtime: runtime,
    });
};

const getAllMovies = () => {
    return db("movies").select("*");
};

const updateMovie = (title, description, runtime, movieId) => {
    return db("movies").where({ id: movieId }).update({
        title: title,
        description: description,
        runtime: runtime,
    });
};

const deleteMovie = (movieId) => {
    return db("movies").where({ id: movieId }).del();
};

module.exports = { addMovie, getAllMovies, deleteMovie, updateMovie };
