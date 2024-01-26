import { StringLiteral } from "typescript";

const express = require("express");
const knex = require("knex");

// creates our express app and listens for requests / responses on localhost:3001
const app = express();
const port = 3001;

// creates our connection using knex to our database.
// TODO: Look at applying these properties to our knexfile.ts and importing it as db to adhere to our seperation of concerns.
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

// type movies = {
//     id: number;
//     title: string;
//     runtime: string;
//     releaseDate: string;
//     favourite: boolean;
// };

// TODO: Create a seperate file to manage database operations.
db.schema
    .createTable("movies", function (table) {
        table.increments("id").primary(); // Automatically increments an id key for each new entry.
        table.string("title").notNullable(); // Title column, can't have null.
        table.string("runtime").notNullable(); // Runtime column, can't have null.
        table.string("releaseDate").notNullable();
        table.boolean("favourite");
    })
    .then(() => {
        console.log("Table created succesfully!");
    })
    .catch((err) => {
        console.error("Error creating tables: ", err);
    });

app.get("/", async (req, res) => {
    // TODO: FATAL:   password authentication failed for user "postgres"
    // TODO: DETAIL:  Connection matched file "/var/lib/postgresql/data/pg_hba.conf" line 128: "host all all all scram-sha-256"
    // TODO: Ask harry about this, seems like a weird thing to do randomly on occasion.
    try {
        // This whole "try" attempt doesn't even work if there are no tables in the database. It does not send "Hello World. I like rocks and candy."
        // if there is no message data
        // TODO: Implement a ternary operator for message.
        const result = await db.select("message").from("newtable").first(); // just some query selector shite.
        const message =
            result.message || "Hello World. I like rocks and candy.";
        // Will either provide a message if the table exists or this other hello world. Either way test works.

        res.send(message);
        console.log(
            "You were successfully able to retrieve a response from the database!"
        ); // actually doesn't even work LMAO.
    } catch (error) {
        console.error("error executing query", error);
        res.status(500).send("Internal Server Error");
    }
});

// gets our express app to listen for responses .
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
