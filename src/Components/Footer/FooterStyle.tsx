import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #650000;
    color: white;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 15vw;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

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
