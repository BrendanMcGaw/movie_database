import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Search = () => {
    const [movieQuery, setMovieQuery] = useState<string>();
    const [movies, setMovies] = useState<any>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the form from submitting normally
        // setup a route page to redirect to and display the results.
        console.log(
            "This is the handleSubmit before the infamous error of death!"
        );
        if (movieQuery) {
            try {
                const response = await fetch(
                    `http://localhost:3001/movies/getMovies/searchResult/${movieQuery}`
                );
                const data = await response.json();
                console.log("What data are we getting here chief!?", data);
                setMovies(data);
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
            }
        }
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    className="searchInput" //TODO: Change this to a styled component.
                    type="text"
                    placeholder="Search for movies..."
                    onChange={(e) => {
                        setMovieQuery(e.target.value);
                    }}
                    // onChange event will update the query hook whenever I type something into the input.
                />
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

// export const SearchBar = (value: any) => {
//     const [searchResults, setSearchResults] = useState();

//     const fetchMovies = async () => {
//         const response = await fetch("http://localhost:3001/movies/getMovies");
//         const results = await response.json();
//         setSearchResults(results);
//         console.log(searchResults);
//     };

//     useEffect(() => {
//         fetchMovies();
//     }, []);

//     return (
//         <section>
//             <input placeholder="Search for movies..." value={value}></input>
//         </section>
//     );
// };
