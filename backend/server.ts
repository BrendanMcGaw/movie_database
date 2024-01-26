const express = require("express");
const knex = require("knex");

const app = express();
const port = 3001;

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
        const result = await db.select("message").from("new_table").first();
        const message =
            result.message || "Hello World. I like rocks and candy.";

        res.send(message);
    } catch (error) {
        console.error("error executing query", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
