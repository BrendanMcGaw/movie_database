import React from "react";
import "../Styles/cardStyle.css";
import { Link } from "react-router-dom";
import { MovieForm } from "./MovieForm";
import { DeleteMovie } from "../Requests/DeleteMovie";

export type MovieCardProps = {
    movie: {
        id: number;
        title: string;
        poster: string;
        year: number;
        description: string;
        runtime: number;
    };
    showFullDescriptionHandler: (movieId: number) => void;
    toggleUpdateForm: (movieId: number) => void;
    showUpdateMovieForm: { [id: number]: boolean };
    showFullDescription: { [id: number]: boolean };
};
// key is also a property that has been passed. movie.id unnecessary.
export const MovieCard: React.FC<MovieCardProps> = ({
    movie,
    showFullDescriptionHandler,
    toggleUpdateForm,
    showUpdateMovieForm,
    showFullDescription,
}) => {
    return (
        <div key={movie.id} className="cardContainer">
            {/* Makes poster image clickable to route to individual moviePage */}
            <Link to={`/movie/${movie.id}`} className="imgLink">
                <img
                    className="moviePosters"
                    src={movie.poster}
                    alt={"Hero-Movie Poster"}
                />
            </Link>
            <div className="year">{movie.year}</div>
            <p className="description">
                {showFullDescription[movie.id]
                    ? movie.description
                    : movie.description.slice(0, 100)}
            </p>
            <button
                className="readMoreButton"
                onClick={() => {
                    showFullDescriptionHandler(movie.id);
                }}
            >
                {showFullDescription[movie.id] ? "Read Less" : "Read More"}
            </button>

            <p className="runtime">Runtime: {movie.runtime} minutes</p>

            <footer className="cardButtonContainer">
                <button
                    className="updateButton"
                    onClick={() => {
                        toggleUpdateForm(movie.id);
                        console.log(movie.id);
                    }}
                >
                    {showUpdateMovieForm[movie.id] ? "Hide " : "Show "}
                    Update
                </button>
                {showUpdateMovieForm[movie.id] ? (
                    <MovieForm
                        updateMode={true}
                        movieId={movie.id}
                        showAddMovie={false}
                        moviePoster=""
                    />
                ) : null}
                <button
                    className="deleteButton"
                    onClick={() => DeleteMovie(movie.id)}
                >
                    Delete
                </button>
            </footer>
        </div>
    );
};
