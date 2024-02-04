const express = require("express");
const { addMovie } = require("./database/movieModel.js");
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
    try {
        const { title, description, runtime } = req.body;
        const result = await addMovie(title, description, runtime);

        res.status(201).json({ message: "Movie added succesfully", result });
    } catch (error) {
        // catches when there is an error and reports on that error in the log. Pretty handy.
        console.error("error executing query", error);
        res.status(500).send("Internal Server Error");
    }
});

// gets our express app to listen for responses .
app.listen(port, () => {
    console.log(
        `Example app listening on port what is this!? WE DID IT!? FOR REALZISES? ${port}`
    );
});

app.get("/", (req, res) => {
    res.send(
        "HEY BRO! LOOK WHATS' UP NOW! GOOPY YEET STUFF HELLO IDIOT! LIT CUNT WASSUP MY FOOL"
    );
});
