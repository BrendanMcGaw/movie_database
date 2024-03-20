import React from "react";
import "../Styles/cardStyle.css";
import { Link } from "react-router-dom";
import { MovieForm } from "./MovieForm";
import { DeleteMovie } from "../Requests/DeleteMovie";
import { useFetchMoviePoster } from "../Hooks/useFetchMoviePoster";
import { MoviePage } from "./MoviePage";

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
            <img
                className="moviePosters"
                src={movie.poster}
                alt={"Hero-Movie Poster"}
                // something to do with adding a Link / React-route to my moviePage and pass all properties to it. Drill Prop style.
            />
            <div className="year">
                <Link to={`/movie/${movie.id}`} className="year">
                    {movie.year}
                </Link>
            </div>
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
            {/* TODO: Basic read more implementation. Needs to look cleaner and change from Read More to Read Less to shrink. 
        Should also be state lifted in order to individualize each read more button so that it doesn't expand them all at once. */}
            <p className="runtime">Runtime: {movie.runtime} minutes</p>

            <footer className="cardButtonContainer">
                <button
                    className="updateButton"
                    onClick={() => {
                        toggleUpdateForm(movie.id);
                        console.log(movie.id); // is logging which movie.id we're clicking on, but TODO: Not updating the correct one assosciated with the movie.id
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
