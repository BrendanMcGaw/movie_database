import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./Buttons/Buttons";
import { Pagination } from "antd";
import "../Styles/App.css";

export const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [showUpdateMovieForm, setShowUpdateMovieForm] = useState<{
        [id: number]: boolean;
    }>({});
    const [showFullDescription, setShowFullDescription] = useState<{
        [id: number]: boolean;
    }>({}); // is to say that this is an object, where each key is a number, and each value is a boolean.
    const [pageNumber, setPageNumber] = useState<number>(1); // Initializing with 1.
    const [pageSize, setPageSize] = useState<number>(5);

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

    // Probably want to lift the state to the parent app so that each update button is independent of the others.

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/movies/getMovies/"
                );
                const data = await response.json();
                setMovies(data);
                console.log("Where are my hecking movies?", movies);
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
            }
        };

        fetchData();
    }, []);

    // Function to handle page change
    const handlePageChange = (pageNumber: number) => {
        setPageNumber(pageNumber);
    };

    // Logic to cut up my movies array into 5 movies to display per page.
    const displayedMovies = movies.slice(
        (pageNumber - 1) * pageSize,
        pageNumber * pageSize
    );

    // console.log(JSON.stringify(movies));
    return (
        <>
            <div className="pageContentContainer">
                <AddMovieButton
                    updateMode={false}
                    movieId={0}
                    showAddMovie={true}
                    moviePoster=""
                />
                {displayedMovies.map((movie) => (
                    <MovieCard
                        key={movie.id} // passing key means I probably don't need to use movie.id in my actual MovieCard. Reassess wasted resources.
                        movie={movie}
                        showFullDescriptionHandler={showFullDescriptionHandler}
                        toggleUpdateForm={toggleUpdateForm}
                        showUpdateMovieForm={showUpdateMovieForm}
                        showFullDescription={showFullDescription}
                    />
                ))}
            </div>
            <section className="paginationContainer">
                <Pagination
                    className="paginationStyle"
                    defaultCurrent={1}
                    defaultPageSize={pageSize}
                    total={movies.length}
                    current={pageNumber}
                    onChange={handlePageChange}
                />
            </section>
        </>
    );
};
