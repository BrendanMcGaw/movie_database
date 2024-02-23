const knex = require("knex");
const knexfile = require("./knexfile");

const db = knex(knexfile.development); // allows us to import or require db in other files.
module.exports = db;
