module.exports = {
    development: {
        client: "pg",
        connection: {
            host: "192.168.1.102",
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
