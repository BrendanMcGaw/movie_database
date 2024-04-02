import React from "react";
import "../Styles/navbar.css";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { GiAnimalSkull } from "react-icons/gi";
import { Link } from "react-router-dom";

//TODO: Create dynamic pages for each item in the table when clicked on open page with x components that look dope.
//TODO: ADD USERS AND REVIEWS
export const Navbar = () => {
    return (
        <div className="navbarContainer">
            <Link to="/HomePage" className="pageTitle">
                Picture Pulse
            </Link>
            <nav className="navbarItem"></nav>
            <Link to="/HomePage" className="navbarItem">
                Home
            </Link>
            <Link to="/browseMovies" className="navbarItem">
                Movies
            </Link>
            <nav className="navbarItem">Genres</nav>
            <nav className="navbarItem">Actors</nav>
            <nav className="navbarItem">Directors</nav>
            <nav className="navbarItem">Profile</nav>
        </div>
    );
};
