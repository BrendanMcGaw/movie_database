// basically our connection string for our query builder knex to the postgres database image hosted on docker.
module.exports = {
    development: {
        client: "pg",
        connection: {
            host: "database", // Not entirely sure why, but this has to be set to my IP. Not localhost. Not 127.0.0.1. Not service name: database.
            database: "postgres",
            user: "postgres",
            password: "password",
            port: 5432,
        },
        pool: {
            min: 1,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
