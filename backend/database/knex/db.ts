const knex = require("knex");
const knexfile = require("../knexfile");

export const db = knex(knexfile.development); // allows us to import or require db in other files.
