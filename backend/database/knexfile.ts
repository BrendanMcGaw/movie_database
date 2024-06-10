// basically our connection string for our query builder knex to the postgres database image hosted on docker.
// TODO: Set the rest of these details in .env file
module.exports = {
    development: {
        client: "pg",
        connection: {
            host: "database", // Not entirely sure why, but this has to be set to my IP. Not localhost. Not 127.0.0.1. Not service name: database.
            database: "postgres",
            user: "postgres",
            password: "password",
            port: process.env.KNEX_PORT,
        },
        pool: {
            min: 1,
            max: 10,
        },
        migrations: {
            directory: "./knex/migrations",
            tableName: "knex_migrations",
        },
    },
};
