import React, { useState } from "react";
import { AddMovieButtonHeaderStyle, StyledSubmitButton } from "./ButtonsStyles";
import { CardButtons, AddMovieButtonStyle } from "./ButtonsStyles";
import { DeleteMovie } from "../../Requests/DeleteMovie";
import { MovieForm } from "../MovieForm";
import { MovieFormProps } from "../MovieForm";
import { MovieCardProps } from "../../App";

export const AddMovieButton: React.FC<MovieFormProps> = ({
    updateMode,
    movieId,
}) => {
    const [showAddMovie, setShowAddMovie] = useState(false);
    return (
        <>
            <AddMovieButtonHeaderStyle>
                <AddMovieButtonStyle
                    onClick={() => setShowAddMovie(!showAddMovie)}
                >
                    {showAddMovie ? "" : ""} Add Movie
                </AddMovieButtonStyle>
            </AddMovieButtonHeaderStyle>
            {showAddMovie ? (
                <MovieForm
                    updateMode={false}
                    movieId={0}
                    showAddMovie={true}
                    moviePoster=""
                />
            ) : null}
        </>
    );
};

export const SubmitButton = () => {
    return <StyledSubmitButton type="submit">Submit</StyledSubmitButton>;
};

export const DeleteButton = ({ movieId }: { movieId: number }) => {
    console.log("This is the movie Id information", movieId);
    return (
        <CardButtons onClick={() => DeleteMovie(movieId)}>Delete</CardButtons>
    );
};

export const UpdateButton: React.FC<MovieCardProps> = ({
    movie,
    toggleUpdateForm,
    showUpdateMovieForm,
}) => {
    return (
        // To encapsulate 2 separate elements in a functional component, i had to wrap them in a shard fragment.
        <>
            <CardButtons
                className="updateButton"
                onClick={() => {
                    toggleUpdateForm(movie.id);
                    console.log(
                        "This is the update movie button id number",
                        movie.id
                    );
                }}
            >
                {showUpdateMovieForm[movie.id] ? "Hide " : "Show "}
                Update
            </CardButtons>
            {showUpdateMovieForm[movie.id] ? (
                <MovieForm
                    updateMode={true}
                    movieId={movie.id}
                    showAddMovie={false}
                    moviePoster=""
                />
            ) : null}
        </>
    );
};
// TODO: Add the rest of the button components.
