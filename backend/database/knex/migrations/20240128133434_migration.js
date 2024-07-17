// creates migration.
// NEVER FORGET TO ADD --MIGRATIONS-DIRECTORY WHEN CREATING YOUR FILE. PROBABLY CAN DO SOMETHING WITH CONFIG --- ASK HARRY ---
exports.up = (knex) => {
    return knex.schema.createTable("movies", (table) => {
        table.increments("id").primary(); // Automatically increments an id key for each new entry.
        table.string("title").notNullable(); // Title column, can't have null.
        table.string("description");
        // table.string("genre").notNullable();
        table.string("runtime");
        table.string("year"); // Runtime column, can't have null.
        table.string("poster", [10000]);
        table.string("directors", [10000]);
        table.string("actors", [10000]);
        table.string("rating", [10000]);
        table.string("reviews");
        table.string("trailer", [10000]);
        table.string("genre", [10000]);
        table.string("whereToWatch", [10000]);
    }); // note how the .createTable follows on from the previous table creation.
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
