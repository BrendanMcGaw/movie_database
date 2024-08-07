import React from "react";
import "../Styles/cardStyle.css";
import { Link } from "react-router-dom";

import { DeleteButton } from "./Buttons/Buttons";
import { MovieCardProps } from "../App";

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
                <DeleteButton movieId={movie.id} />
                <img
                    className="movieGlow"
                    src={movie.poster}
                    alt={"Hero-Movie Poster"}
                />
            </Link>
            <div className="year">{movie.year}</div>
            {/* <p className="description">
                {showFullDescription[movie.id]
                    ? movie.description
                    : movie.description.slice(0, 100)}
            </p> */}
            {/* <button
                className="readMoreButton"
                onClick={() => {
                    showFullDescriptionHandler(movie.id);
                }}
            >
                {showFullDescription[movie.id] ? "Read Less" : "Read More"}
            </button> */}

            {/* <p className="runtime">Runtime: {movie.runtime} minutes</p> */}

            {/* <footer className="cardButtonContainer">
                <UpdateButton
                    movie={movie}
                    showFullDescriptionHandler={showFullDescriptionHandler}
                    toggleUpdateForm={toggleUpdateForm}
                    showUpdateMovieForm={showUpdateMovieForm}
                    showFullDescription={showFullDescription}
                />
            </footer> */}
        </div>
    );
};
