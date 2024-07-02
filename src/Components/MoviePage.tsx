import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/MoviePageStyles.css";

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<any[]>([]);
    console.log("Movie Data: ", movie);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("LETS FETCH!!");
                // Getting TypeError failed to fetch.
                const response = await fetch(
                    `http://localhost:3001/movies/getMovies/moviePage/${id}` // need to make this title to search for titles? Maybe?
                );
                const data = await response.json();
                console.log("This is the data being fetched" + data);
                setMovie(data);
            } catch (error) {
                console.log("Error fetching movies for front-end", error);
            }
        };

        fetchData();
    }, [id]);
    const movieActors = movie.map((movieData) => movieData.actors);
    let splitNames = movieActors.toString().split(",");
    console.log("Split Names: ", splitNames);

    const ListActors = () => {
        while (splitNames.length > 0) {
            return splitNames.map((actor) => {
                actor = actor
                    .replace("{", "")
                    .replace("}", "")
                    .replace(/"/g, "");
                return (
                    <p className="movieActors" key={actor}>
                        {actor}
                    </p>
                );
            });
        }
    };
    return (
        <div className="moviePageContentContainer">
            {/* I broke this at some point, I think I used the same className in movieList. Fix tomorrow. */}
            {movie.map((movieData) => (
                <div key={movieData.id} className="moviePageContent">
                    <img
                        className="backgroundImage"
                        src={movieData.horizontalBackdrop}
                        alt=""
                    />
                    {/* <img
                        className="backdropImage"
                        src={movieData.horizontalBackdrop}
                        alt=""
                    /> */}
                    <a href={movieData.movieTrailer}>
                        {movieData.movieTrailerThumbnail}
                    </a>
                    <h1 className="movieTitle">{movieData.title}</h1>
                    <section className="movieTitleSection">
                        <h3 className="movieDescription">
                            {movieData.description}
                        </h3>
                        <section className="runtimeAndYearContainer">
                            <p className="movieRuntime">
                                {"Runtime: " + movieData.runtime + " minutes"}
                            </p>
                            <p className="movieYear">
                                {"Release Year: " + movieData.year}
                            </p>
                        </section>
                    </section>
                    <div className="movieActorsContainer">
                        <h1 className="movieActorsHeading">Cast</h1>
                        {ListActors()}
                    </div>
                    <p className="movieGenres">{movieData.genres}</p>
                    <p className="movieDirectors">{movieData.directors}</p>
                    <p className="movieRating">{movieData.rating}</p>
                </div>
            ))}
        </div>
    );
};
