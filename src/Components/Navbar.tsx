import React from "react";
import "../Styles/navbar.css";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { GiAnimalSkull } from "react-icons/gi";

//TODO: Create dynamic pages for each item in the table when clicked on open page with x components that look dope.
//TODO: ADD USERS AND REVIEWS
export const Navbar = () => {
    return (
        <div className="navbarContainer">
            <nav className="pageTitle">Picture Pulse</nav>
            <nav className="navbarItem"></nav>
            <nav className="navbarItem">Home</nav>
            <nav className="navbarItem">Movies</nav>
            <nav className="navbarItem">Genres</nav>
            <nav className="navbarItem">Actors</nav>
            <nav className="navbarItem">Directors</nav>
            <nav className="navbarItem">Profile</nav>
        </div>
    );
};
