const knex = require("knex");
const knexfile = require("../knexfile.ts");

export const db = knex(knexfile.development); // allows us to import or require db in other files.
