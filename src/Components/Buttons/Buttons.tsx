import { StyledSubmitButton } from "./ButtonsStyles";
import { CardButtons } from "./ButtonsStyles";
import { DeleteMovie } from "../../Requests/DeleteMovie";

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
// TODO: Add the rest of the button components.

export {};
