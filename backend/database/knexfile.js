module.exports = {
    development: {
        client: "pg",
        connection: {
            host: "192.168.1.102", // Not entirely sure why, but this has to be set to my IP. Not localhost. Not 127.0.0.1. Not service name: database.
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
