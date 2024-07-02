import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./Buttons/Buttons";
import { Pagination } from "antd";
import { MovieCardProps } from "../App";
import "../Styles/App.css";

// This function preloads the movie cards by loading the poster images in the background.
const preloadMovieCards = async (movies: any[]): Promise<void> => {
    // Create an array of promises, where each promise represents loading an image.
    const promises = movies.map(
        (movie) =>
            new Promise<void>((resolve) => {
                // Create a new Image object.
                const img = new Image();
                // Set the source of the image to the movie's poster URL.
                img.src = movie.poster;
                // When the image is loaded, resolve the promise.
                img.onload = () => resolve();
                img.onerror = () => resolve();
            })
    );
    // Wait for all the promises to resolve.
    await Promise.all(promises);
};

export const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [movieCardLoaded, setMovieCardLoaded] = useState<boolean>(false);
    const [showUpdateMovieForm, setShowUpdateMovieForm] = useState<{
        [id: number]: boolean;
    }>({});
    const [showFullDescription, setShowFullDescription] = useState<{
        [id: number]: boolean;
    }>({}); // is to say that this is an object, where each key is a number, and each value is a boolean.
    const [pageNumber, setPageNumber] = useState<number>(1); // Initializing with 1.
    const [pageSize, setPageSize] = useState<number>(10);

    const showFullDescriptionHandler = (movieId: number) => {
        setShowFullDescription((prevState) => ({
            ...prevState,
            [movieId]: !prevState[movieId],
        }));
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
                setLoading(true);
                const response = await fetch(
                    "http://localhost:3001/movies/getMovies/"
                );
                const data = await response.json();
                setMovies(data);

                await preloadMovieCards(data);
                setMovieCardLoaded(true); // Sets the boolean to true after the movie cards data has been loaded.

                setLoading(false);
                console.log("after the fetch", loading);
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Diagnostic tool to find out when the loading state changes.
    useEffect(() => {
        console.log("Loading state changed:", loading);
    }, [loading]);
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
                {loading ? <p>Loading....</p> : null}{" "}
                {/* Added a loading bar to the movie browser */}
                <AddMovieButton
                    updateMode={false}
                    movieId={0}
                    showAddMovie={true}
                    moviePoster=""
                />
                {movieCardLoaded &&
                    displayedMovies.map((movie) => (
                        <MovieCard
                            key={movie.id} // passing key means I probably don't need to use movie.id in my actual MovieCard. Reassess wasted resources.
                            movie={movie}
                            showFullDescriptionHandler={
                                showFullDescriptionHandler
                            }
                            toggleUpdateForm={toggleUpdateForm}
                            showUpdateMovieForm={showUpdateMovieForm}
                            showFullDescription={showFullDescription}
                        />
                    ))}
            </div>
            {/* TODO: Separate concerns, create component from pagination. */}
            <section className="paginationContainer">
                <Pagination
                    hideOnSinglePage={true}
                    defaultCurrent={1}
                    defaultPageSize={pageSize} // Amount of items that are able to be seen per page.
                    total={movies.length}
                    current={pageNumber}
                    onChange={handlePageChange}
                />
            </section>
        </>
    );
};
