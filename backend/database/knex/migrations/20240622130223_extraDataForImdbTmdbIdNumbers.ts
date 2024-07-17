import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("movies", (table) => {
        table.string("imdbId", 10000);
        table.string("tmdbId", 10000);
        table.string("youtubeTrailer", 10000);
        table.string("youtubeTrailerThumbnail", 10000);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("movies", (table) => {
        table.string("imdbId", 10000);
        table.string("tmdbId", 10000);
        table.string("youtubeTrailer", 10000);
        table.string("youtubeTrailerThumbnail", 10000);
    });
}
