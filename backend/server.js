const express = require("express");
const {
    addMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
} = require("./database/movieModel.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const port = 3001;
// our exposes port on our local network.

// https://en.wikipedia.org/wiki/HTTP#Request_methods
// app.get("/", async (req, res) => {
//     res.send(movieDetails);
// });

// Posts the data provided from the inputs in the front-end to the database.
app.post("/", async (req, res) => {
    try {
        const { title, description, runtime } = req.body; // requests the body of text provided to the variables by the front end
        console.log(req.body); // logs the requested body information as an object.
        const result = await addMovie(title, description, runtime); // Uses the function from movieModel and assigns thet body of text to each variable to turn it into a movie object.
        res.status(201).json({ message: "Movie added succesfully", result }); // Sends the resulting movie object to the database.
    } catch (error) {
        // catches when there is an error and reports on that error in the log. Pretty handy.
        console.error("error executing query", error);
        res.status(500).send("Internal Server Error");
    }
});

// Gets all the data from the movies table in the database.
// The path provided is just a route setup for you to always get the correct method when using a fetch to do things.
app.get("/movies/getMovies/", async (req, res) => {
    try {
        const movieData = await getAllMovies();
        app.post("../src/components/movieCard.tsx", async (req, res) => {});
        res.status(201).json(movieData);
    } catch (error) {
        console.log("Could not find movies", error);
        throw error;
    }
});

app.put("/movies/updateMovies/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const { title, description, runtime } = req.body;
        const result = await updateMovie(title, description, runtime, movieId);

        res.status(200).json({
            message: "You've now updated the movie",
            result,
        });
    } catch (error) {
        console.log("Could not update the movie", error);
        throw error;
    }
});
// When running addMovie Button receiving this catch error ^^

app.delete("/movies/delete/:id", async (req, res) => {
    const movieId = req.params.id;
    const result = await deleteMovie(movieId);
    res.status(200).json({
        message: "You've succesfully deleted the movie",
        result,
    });
});

// gets our express app to listen for responses .
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
