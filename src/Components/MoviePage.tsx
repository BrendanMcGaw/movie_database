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
                return <p key={actor}>{actor}</p>;
            });
        }
    };
    return (
        <div className="pageContent">
            {movie.map((movieData) => (
                <div key={movieData.id}>
                    <h1>{movieData.title}</h1>
                    <img src={movieData.poster} alt="" />
                    <div className="descriptionContainer">
                        <h3>{movieData.description}</h3>
                    </div>
                    <p>{movieData.runtime}</p>
                    <p>{movieData.year}</p>
                    <div className="actorsContainer">
                        <h1 className="actorsHeading">Cast</h1>
                        <p className="actorsNames">{ListActors()}</p>
                    </div>
                    <p>{movieData.genres}</p>
                    <p>{movieData.directors}</p>
                    <p>{movieData.rating}</p>
                </div>
            ))}
        </div>
    );
};
