const express = require("express");
const app = express();
const dotenv = require("dotenv").config(); // Had to move my .env file into my backend directory. Fuck me.
const cors = require("cors"); // required for backend environment variables.
const {
    addMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
    getSpecificMovie,
} = require("./database/movieModel.js");

app.use(express.json());
app.use(cors({ origin: true }));
const port = process.env.PORT;

app.post("/", async (req, res) => {
    try {
        const { title, description, runtime, year, poster } = req.body; // requests the body of text provided to the variables by the front end
        console.log(req.body); // logs the requested body information as an object.
        const result = await addMovie(
            title,
            description,
            runtime,
            year,
            poster
        ); // Uses the function from movieModel and assigns thet body of text to each variable to turn it into a movie object.
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

//TODO: Is this now the problem?
app.get("/movies/getMovies/:id", async (req, res) => {
    const movieId = req.params.id;
    console.log("is this part even TRYNG?!");

    try {
        const movieData = await getSpecificMovie({ id: movieId });
        res.status(201).json(movieData);
        console.log(movieData);
    } catch (error) {
        console.log("Could not find movie", error);
        throw error;
    }
});

app.put("/movies/updateMovies/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const { title, description, runtime, year, poster } = req.body;
        const result = await updateMovie(
            title,
            description,
            runtime,
            year,
            poster,
            movieId
        );

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
