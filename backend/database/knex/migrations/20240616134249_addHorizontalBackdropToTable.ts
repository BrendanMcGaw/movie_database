import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("movies", (table) => {
        table.string("horizontalBackdrop");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("movies", (table) => {
        table.dropColumn("horizontalBackdrop");
    });
}
