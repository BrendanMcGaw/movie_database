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

export const CardButtons = styled.button`
    margin-left: 5px;
    background-color: #650000;
    height: 35px;
    align-self: flex-end; /* Allows me to put my buttons at the end of the cardContainer */
    width: 100px;
    font-size: 14px;
    color: rgb(230, 215, 215);
    font-family: "DM Serif Text", serif;
    font-weight: lighter;
    font-style: normal;
    &:hover {
        background-color: rgb(211, 115, 115);
        cursor: pointer;
        transition-duration: 300ms;
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
