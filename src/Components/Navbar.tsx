import React from "react";
import "../Styles/navbar.css";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

//TODO: Create dynamic pages for each item in the table when clicked on open page with x components that look dope.
//TODO: ADD USERS AND REVIEWS
export const Navbar = () => {
    return (
        <div className="navbarContainer">
            <header className="navbarContainer">
                <nav>Hello World</nav>
                <nav>More hellos</nav>
                <DropdownButton
                    title="Users"
                    align="start"
                    id="dropdown-menu-align-start"
                >
                    <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Favourites</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Settings</Dropdown.Item>
                </DropdownButton>
                <nav>Profile</nav>
            </header>
        </div>
    );
};
