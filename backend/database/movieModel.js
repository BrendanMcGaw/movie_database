const db = require("./db.js");

const addMovie = (title, description, runtime) => {
    return db("movies").insert({
        title: title,
        description: description,
        runtime: runtime,
    });
};

const getAllMovies = () => {
    const rows = db("movies").select("*");
    return rows;
};

module.exports = { addMovie, getAllMovies };
