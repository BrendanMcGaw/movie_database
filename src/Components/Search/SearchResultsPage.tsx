import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieCard } from "../MovieCard";
import { MovieCardProps } from "../../App";
export const SearchResultsPage = () => {
    const [showUpdateMovieForm, setShowUpdateMovieForm] = useState<{
        [id: number]: boolean;
    }>({});
    const [showFullDescription, setShowFullDescription] = useState<{
        [id: number]: boolean;
    }>({}); // is to say that this is an object, where each key is a number, and each value is a boolean.

    const showFullDescriptionHandler = (movieId: number) => {
        setShowFullDescription((prevState) => ({
            ...prevState,
            [movieId]: !prevState[movieId],
        }));
        console.log(showFullDescription);
    };

    const toggleUpdateForm = (movieId: number) => {
        setShowUpdateMovieForm((prevState) => ({
            ...prevState,
            [movieId]: !prevState[movieId],
        }));
    };
    const location = useLocation();
    const { searchResults } = location.state;
    console.log("This is our new console log!", searchResults);
    return (
        <div className="pageLayout">
            <div className="searchResults">Word</div>
            <div>
                {/* initially was trying to pass over an array of objects to a component that was only taking objects. Mapping solved problem. */}
                {searchResults.map((movie: any) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        showFullDescriptionHandler={showFullDescriptionHandler}
                        toggleUpdateForm={toggleUpdateForm}
                        showUpdateMovieForm={showUpdateMovieForm}
                        showFullDescription={showFullDescription}
                        // Works but need to pass proper values to the buttons.
                    />
                ))}
            </div>
        </div>
    );
};

//TODO: Redirect searchBar page to this page after searching.
//TODO: Display MovieCards assosciated with the searched title.
