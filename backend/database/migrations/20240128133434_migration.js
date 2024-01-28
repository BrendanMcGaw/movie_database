// creates migration.
// NEVER FORGET TO ADD --MIGRATIONS-DIRECTORY WHEN CREATING YOUR FILE. PROBABLY CAN DO SOMETHING WITH CONFIG --- ASK HARRY ---
exports.up = (knex) => {
    return knex.schema
        .createTable("movies", (table) => {
            table.increments("id").primary(); // Automatically increments an id key for each new entry.
            table.string("title").notNullable(); // Title column, can't have null.
            table.string("description").notNullable();
            table.string("genre").notNullable();
            table.string("runtime").notNullable(); // Runtime column, can't have null.
            table.string("director").notNullable(); // Director column, can't have null.
            table.string("actors").notNullable(); // TODO: Add state functionality to add multiple actors. Not sure how to do this yet.
            table.string("review"); // TODO: Potentially only add this functionality for users.
            table.string("release_date").notNullable(); // apparently underscore is the bees knees when it comes to database variables. Snake case.
            table.boolean("favourite");
        })
        .then(() => {
            console.log("Table created successfully!");
        })
        .catch((err) => {
            console.error("Error creating tables: ", err);
        });
};

// kind of undoes migration.
exports.down = (knex) => {
    return knex.schema.dropTable("movies");
};
