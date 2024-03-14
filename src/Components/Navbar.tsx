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
            <header className="navbarContainer">
                <nav>
                    <GiAnimalSkull />
                </nav>
                <nav>Movies Database</nav>
                <DropdownButton
                    title="Users"
                    align="start"
                    className="dropdownMenu"
                >
                    <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Favourites</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Settings</Dropdown.Item>
                </DropdownButton>
                <nav>Dark / Light modes</nav>
            </header>
        </div>
    );
};
