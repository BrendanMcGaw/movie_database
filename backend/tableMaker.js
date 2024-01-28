// const knex = require("knex");
// // TODO: Change this to a "hasTable" method.
// // TODO: Much better way of doing this using property values I'm certain, but we'll make it simple bitch for now.

// async function createTables() {
//     await createMovieTable();
//     await createGenreTable();
// }

// const createMovieTable = () => {
//     knex.schema.hasTable("movies").then(function (exists) {
//         if (!exists) {
//             return knex.schema
//                 .createTable("movies", function (table) {
//                     table.increments("id").primary(); // Automatically increments an id key for each new entry.
//                     table.string("title").notNullable(); // Title column, can't have null.
//                     table.string("description").notNullable();
//                     table.string("genre").notNullable();
//                     table.string("runtime").notNullable(); // Runtime column, can't have null.
//                     table.string("director").notNullable(); // Director column, can't have null.
//                     table.string("actors").notNullable(); // TODO: Add state functionality to add multiple actors. Not sure how to do this yet.
//                     table.string("review"); // TODO: Potentially only add this functionality for users.
//                     table.string("releaseDate").notNullable(); // Release date column, can't have null.
//                     table.string("genres");
//                     table.boolean("favourite");
//                 })
//                 .then(() => {
//                     console.log("Table created succesfully!");
//                 })
//                 .catch((err) => {
//                     console.error("Error creating tables: ", err);
//                 });
//         }
//     });
// };
// // TODO: Change this to a "hasTable" method.
// // TODO: Much better way of doing this using property values I'm certain, but we'll make it simple bitch for now.

// const createGenreTable = () => {
//     knex.schema.hasTable("genre").then(function (exists) {
//         if (!exists) {
//             return knex.schema
//                 .createTable("genre", function (table) {
//                     table.increments("id").primary(); // Automatically increments an id key for each new entry.
//                     table.boolean("action").Nullable();
//                     table.boolean("adventure").Nullable();
//                     table.boolean("animation").Nullable();
//                     table.boolean("biography").Nullable();
//                     table.boolean("comedy").Nullable();
//                     table.boolean("crime").Nullable();
//                     table.boolean("documentary").Nullable();
//                     table.boolean("drama").Nullable();
//                     table.boolean("family").Nullable();
//                     table.boolean("fantasy").Nullable();
//                     table.boolean("film-noir").Nullable();
//                     table.boolean("game-show").Nullable();
//                     table.boolean("history").Nullable();
//                     table.boolean("horror").Nullable();
//                     table.boolean("music").Nullable();
//                     table.boolean("musical").Nullable();
//                     table.boolean("mystery").Nullable();
//                     table.boolean("news").Nullable();
//                     table.boolean("reality-tv").Nullable();
//                     table.boolean("romance").Nullable();
//                     table.boolean("sci-fi").Nullable();
//                     table.boolean("short").Nullable();
//                     table.boolean("sport").Nullable();
//                     table.boolean("talk-show").Nullable();
//                     table.boolean("thriller").Nullable();
//                     table.boolean("war").Nullable();
//                     table.boolean("western").Nullable();
//                 })
//                 .then(() => {
//                     console.log("Table created succesfully!");
//                 })
//                 .catch((err) => {
//                     console.error("Error creating tables: ", err);
//                 });
//         }
//     });
// };

// createTables();
