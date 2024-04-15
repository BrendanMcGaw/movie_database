import styled from "styled-components";

export const StyledSubmitButton = styled.button`
    background-color: #e0e1dd;
    color: black;
    height: 3rem;
    font-size: 20px;
    font-weight: bold;
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
