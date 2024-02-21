import React, { useState, useEffect } from "react";
import { MovieForm } from "./MovieForm";
import { Card } from "./MovieCards";
import image from "../Assets/WalkingTallImageFrom Omdb.jpg";

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
        <div className="pageContentContainer">
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Card>
                        {/* TODO: Add OMDB functionality, to take the title input, correspond that with the image assosciated with the film and use that as the card image. */}
                        <img src={image} alt={"The Rock carrying a 4 by 4."} />
                        <h2>{movie.title}</h2>
                        <p className="description">{movie.description}</p>
                        <p className="runtime">
                            Runtime: {movie.runtime} minutes
                        </p>
                        <footer className="cardButtonContainer">
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
                            <button
                                className="deleteButton"
                                onClick={() => DeleteMovie(movie.id)}
                            >
                                Delete
                            </button>
                        </footer>
                    </Card>
                </div>
            ))}
        </div>
    );
};
