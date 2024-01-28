const express = require("express");
const router = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(router);
const db = require("./database/db");
const port = 3001;

app.get("/", async (req, res) => {
    // TODO: FATAL:   password authentication failed for user "postgres"
    // TODO: DETAIL:  Connection matched file "/var/lib/postgresql/data/pg_hba.conf" line 128: "host all all all scram-sha-256"
    // TODO: Ask harry about this, seems like a weird thing to do randomly on occasion. Only occurs when there is no tables in the database.
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
