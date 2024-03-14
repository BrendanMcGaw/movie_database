export const postMovies = async (movieDetails: Movie) => {
    // Prevents form from doing its default submission bullshit.

    const response = await fetch("http://localhost:3001", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(movieDetails),
    });
    return response.json();
};

export type Movie = {
    title: string;
    description: string;
    runtime: number;
    year: number;
    poster: string | undefined;
};
