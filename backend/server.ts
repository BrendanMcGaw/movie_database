const express = require("express");
const knex = require("knex");

// creates our express app and listens for requests / responses on localhost:3001
const app = express();
const port = 3001;

// creates our connection using knex to our database.
const db = knex({
    client: "pg",
    connection: {
        user: "postgres",
        host: "database", // this is what harry was talking about. In your docker-compose file under services it reads "database"
        database: "postgres",
        password: "password",
        port: 5432,
    },
});

app.get("/", async (req, res) => {
    try {
        const result = await db.select("message").from("newtable").first(); // just some query selector shite.
        const message =
            result.message || "Hello World. I like rocks and candy.";
        // Will either provide a message if the table exists or this other hello world. Either way test works.

        res.send(message);
        console.log(
            "You were successfully able to retrieve a response from the database!"
        );
    } catch (error) {
        console.error("error executing query", error);
        res.status(500).send("Internal Server Error");
    }
});

// gets our express app to listen for responses .
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
