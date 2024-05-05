import styled from "styled-components";

export const StyledSubmitButton = styled.button`
    background-color: #e0e1dd;
    color: black;
    height: 3rem;
    font-size: 20px;
    font-weight: bold;
    &:active {
        background-color: #707070;
        transition-duration: 200ms;
    }
    &:focus {
        background-color: #707070;
        transition-duration: 600ms;
    }
`;

// TODO: This should probably just be for the delete button.
export const CardButtons = styled.button`
    /* TODO: Make button visibility: hidden. Unless you're mousing over the movieCard image, then make the button visible. Will require js, passing propertys? boolean stuff?  */
    /* TODO: Consider different icon with black centre for more readability. */
    border: none;
    padding: 0;
    top: -16px;
    right: -16px;
    position: absolute;
    background-color: #650000;
    align-self: flex-end; /* Allows me to put my buttons at the end of the cardContainer */
    height: 0px;
    font-size: 32px;
    color: rgb(228, 31, 31);
    font-family: "DM Serif Text", serif;
    font-weight: lighter;
    font-style: normal;
    &:hover {
        animation: buttonSwell 1500ms alternate infinite;
        color: rgb(255, 122, 122);
        cursor: pointer;
        &:hover {
            @keyframes buttonSwell {
                from {
                    scale: 100%;
                }
                to {
                    scale: 105%;
                }
                to {
                    scale: 110%;
                }
            }
        }
    }
`;

export const AddMovieButtonStyle = styled.button`
    background-color: #e0e1dd;
    transition-duration: 5000;
    height: 100px;
    width: 600px;
    font-size: 30px;
    font-weight: bolder;
    color: #1b263b;
    box-shadow: -1px 2px 15px black;
    margin-bottom: 35px;
`;

export const AddMovieButtonHeaderStyle = styled.header`
    background-color: #0f0606;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
