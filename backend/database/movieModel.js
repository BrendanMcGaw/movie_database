const db = require("./db.js");

const addMovie = (title, description, runtime) => {
    return db("movies").insert({
        title: title,
        description: description,
        runtime: runtime,
    });
};

module.exports = { addMovie };
