export async function GetMovieTrailers(imdbId: string) {
    try {
        const response = await fetch(
            `https://api.kinocheck.de/movies?imdb_id=${imdbId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "Localhost:3000",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to get trailer info ${response.status}`);
        }

        const data = await response.json();
        console.log("This is the response for the trailer info: ", data);
        return data;
    } catch (error) {
        console.error("Error fetching trailer info", error);
        throw error;
    }
}

// Convert all this to the YouTube API to grab trailers, bit of work to come.
