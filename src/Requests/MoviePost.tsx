export const postMovies = async (movieDetails: Movie) => {
    // Prevents form from doing its default submission bullshit.
    try {
        const response = await fetch("http://localhost:3001", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(movieDetails),
        });

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        return response.json();
    } catch (err) {
        console.error(err);
        throw new Error(`Error posting movie: ${err}`);
    }
};

export type Movie = {
    title: string;
    description: string;
    runtime: number;
    year: number | undefined;
    poster: string | undefined;
    apiDescription: string;
    releaseYear: number | undefined;
    genres: string[];
    directors: string[] | undefined;
    actors: string[];
    whereToWatch: string[] | undefined;
    trailer: string;
    rating: number;
    reviews: string[];
};
