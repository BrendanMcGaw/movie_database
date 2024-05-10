import React from "react";
import { StyledFooter } from "./FooterStyle";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <StyledFooter>
            <p>Footer</p>
            <p>Footer</p>
            <div className="bottomRightFooter">
                <a
                    href="https://github.com/BrendanMcGaw"
                    className="githubLink"
                >
                    <FaGithub />
                    Github
                </a>
            </div>
        </StyledFooter>
    );
};
