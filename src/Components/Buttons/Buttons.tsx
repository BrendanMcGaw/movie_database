import { StyledSubmitButton } from "./ButtonsStyles";
import { CardButtons } from "./ButtonsStyles";
import { DeleteMovie } from "../../Requests/DeleteMovie";
import { MovieCardProps } from "../MovieCard";
import { MovieForm } from "../MovieForm";

export const SubmitButton = () => {
    return <StyledSubmitButton type="submit">Submit</StyledSubmitButton>;
};
// Function Parameter Destructuring: With { movieId },
// you're specifying that you expect an object as an argument,
// and you want to extract the movieId property from that object directly.
// This is a shorthand notation in JavaScript and TypeScript to extract properties from objects.
export const DeleteButton = ({ movieId }: { movieId: number }) => {
    console.log("This is the movie Id information", movieId);
    return (
        <CardButtons onClick={() => DeleteMovie(movieId)}>Delete</CardButtons>
    );
};

export const UpdateButton: React.FC<MovieCardProps> = ({
    movie,
    showFullDescriptionHandler,
    toggleUpdateForm,
    showUpdateMovieForm,
    showFullDescription,
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
