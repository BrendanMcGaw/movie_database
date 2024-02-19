import React, { useState, useEffect } from "react";
import { MovieForm } from "./MovieForm";

export const DeleteMovie = (movieId: number) => {
    fetch(`http://localhost:3001/movies/delete/${movieId}`, {
        method: "DELETE",
        mode: "cors",
        body: null,
    });
    console.log(movieId);
    window.location.reload(); // Reloads current window to update the UI
};

export const MovieList = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [showUpdateMovieForm, setShowUpdateMovieForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/movies/getMovies/"
                );
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
            }
        };

        fetchData();
    }, []);

    // console.log(JSON.stringify(movies));
    return (
        <div className="tableContainer">
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Runtime</th>
                </tr>
                {movies.map((movie) => (
                    <tr key={movie.id}>
                        <td style={{ maxWidth: 350 }}>{movie.title}</td>
                        <td style={{ maxWidth: 800 }}>{movie.description}</td>
                        <td style={{ maxWidth: 200 }}>{movie.runtime}</td>
                        <td>
                            <button
                                className="updateButton"
                                onClick={() =>
                                    setShowUpdateMovieForm(!showUpdateMovieForm)
                                }
                            >
                                {showUpdateMovieForm ? "Hide " : "Show "}
                                Update
                            </button>
                            {showUpdateMovieForm ? (
                                <MovieForm
                                    updateMode={true}
                                    movieId={movie.id}
                                    showAddMovie={false}
                                />
                            ) : null}
                            {/* Something was breaking with my assigning of truthys when I was attempting to choose between MovieForms == When updateMode was just
                            <MovieForm
                                    updateMode
                                    movieId={movie.id}
                                    showAddMovie={false}
                                />
                            Was broken, ask harry about why this was happening and how I could test for it in the future. Was it because updateMode always defaults to true and therefore was always true no matter what button i pressed? or was it defaulting somehow differently?
                            Weird documentation. */}
                            <button
                                className="deleteButton"
                                onClick={() => DeleteMovie(movie.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
