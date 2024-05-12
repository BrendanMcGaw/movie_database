import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    background-color: #650000;
    color: white;
    height: 5vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    gap: 15vw;
    justify-content: center;
    align-items: center;
    font-size: 1srem;

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
