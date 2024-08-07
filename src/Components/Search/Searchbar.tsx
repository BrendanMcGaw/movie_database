import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
    const [movieQuery, setMovieQuery] = useState<string>();
    const [searchResults, setSearchResults] = useState<any>({});

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the form from submitting normally
        // setup a route page to redirect to and display the results.
        console.log(
            "This is the handleSubmit before the infamous error of death!"
        );
        if (movieQuery) {
            try {
                const response = await fetch(
                    `http://localhost:3001/movies/getMovies/search-results/${movieQuery}`
                );
                const data = await response.json();
                console.log(
                    "This is the data before it gets set to state:",
                    data
                );
                setSearchResults(data);
                navigate("/search-results", { state: { searchResults: data } });
                console.log(
                    "This is the data after it gets set to state: ",
                    searchResults
                );
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
            }
        }
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <section className="searchContainer">
                    <input
                        className="searchInput" //TODO: Change this to a styled component.
                        type="text"
                        placeholder="Search for movies..."
                        onChange={(e) => {
                            setMovieQuery(e.target.value);
                        }}
                        // onChange event will update the query hook whenever I type something into the input.
                    />

                    <button type="submit" className="submitSearchButtonStyles">
                        <FaSearch className="submitIcon" />
                    </button>
                </section>
            </form>
        </section>
    );
};
