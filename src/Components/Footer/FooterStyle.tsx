import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #650000;
    color: white;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 15vw;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    grid-row: 3;

    a {
        text-decoration: none;
        color: inherit;
    }

    .githubLink {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
    }
`;
