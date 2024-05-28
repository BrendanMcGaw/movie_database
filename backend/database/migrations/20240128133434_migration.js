// creates migration.
// NEVER FORGET TO ADD --MIGRATIONS-DIRECTORY WHEN CREATING YOUR FILE. PROBABLY CAN DO SOMETHING WITH CONFIG --- ASK HARRY ---
exports.up = (knex) => {
    return knex.schema
        .createTable("movies", (table) => {
            table.increments("id").primary(); // Automatically increments an id key for each new entry.
            table.string("title").notNullable(); // Title column, can't have null.
            table.string("description");
            // table.string("genre").notNullable();
            table.string("runtime");
            table.string("year"); // Runtime column, can't have null.
            table.string("poster", [10000]);
            // table.string("director").notNullable(); // Director column, can't have null.
            // table.string("actors").notNullable(); // TODO: Add state functionality to add multiple actors. Not sure how to do this yet.
            // table.string("review"); // TODO: Potentially only add this functionality for users.
            // table.string("release_date").notNullable(); // apparently underscore is the bees knees when it comes to database variables. Snake case.
            // table.boolean("favourite");
        }) // note how the .createTable follows on from the previous table creation.
        .createTable("genre", (table) => {
            table.increments("id").primary(); // Automatically increments an id key for each new entry.
            table.boolean("action");
            table.boolean("adventure");
            table.boolean("animation");
            table.boolean("biography");
            table.boolean("comedy");
            table.boolean("crime");
            table.boolean("documentary");
            table.boolean("drama");
            table.boolean("family");
            table.boolean("fantasy");
            table.boolean("film-noir");
            table.boolean("game-show");
            table.boolean("history");
            table.boolean("horror");
            table.boolean("music");
            table.boolean("musical");
            table.boolean("mystery");
            table.boolean("news");
            table.boolean("reality-tv");
            table.boolean("romance");
            table.boolean("sci-fi");
            table.boolean("short");
            table.boolean("sport");
            table.boolean("talk-show");
            table.boolean("thriller");
            table.boolean("war");
            table.boolean("western");
        });
    // .then(() => { TODO: // why does this not display anything in my log, it was earlier. Confused now.
    //     console.log("Table created successfully!");
    // })
    // .catch((err) => {
    //     console.error("Error creating tables: ", err);
    // });
};

// kind of undoes migration.

exports.down = (knex) => {
    return knex.schema.dropTable("movies");
};
