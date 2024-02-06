const express = require("express");
const { addMovie, getAllMovies } = require("./database/movieModel.js");
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

app.post("/", async (req, res) => {
    // Posts the data provided from the inputs in the front-end to the database.
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
app.get("/", async (req, res) => {
    try {
        const movieData = await getAllMovies();
        app.post("../src/components/movieCard.tsx", async (req, res) => {});
        res.status(201).json(movieData);
    } catch (error) {
        console.log("Could not find movies", error);
        throw error;
    }
});
// gets our express app to listen for responses .
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
