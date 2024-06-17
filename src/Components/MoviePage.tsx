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
                    <p className="actors" key={actor}>
                        {actor}
                    </p>
                );
            });
        }
    };
    return (
        <div className="pageContentContainer">
            {/* I broke this at some point, I think I used the same className in movieList. Fix tomorrow. */}
            {movie.map((movieData) => (
                <div key={movieData.id} className="pageContent">
                    <img
                        className="movieGlow"
                        src={movieData.horizontalBackdrop}
                        alt=""
                    />
                    <img
                        className="backdropImage"
                        src={movieData.horizontalBackdrop}
                        alt=""
                    />
                    <section className="contentOnImage">
                        <h1>{movieData.title}</h1>
                        <h3 className="description">{movieData.description}</h3>
                        <p>{movieData.runtime}</p>
                        <p>{movieData.year}</p>
                        <div className="actorsContainer">
                            <h1 className="actorsHeading">Cast</h1>
                            {ListActors()}
                        </div>
                        <p>{movieData.genres}</p>
                        <p>{movieData.directors}</p>
                        <p>{movieData.rating}</p>
                    </section>
                </div>
            ))}
        </div>
    );
};
