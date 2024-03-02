import React from "react";
import "../Styles/navbar.css";
import { Dropdown } from "react-bootstrap";

//TODO: Create dynamic pages for each item in the table when clicked on open page with x components that look dope.
//TODO: ADD USERS AND REVIEWS
export const Navbar = () => {
    return (
        <div className="navbarContainer">
            <header className="navbarContainer">
                <nav>Hello World</nav>
                <nav>More hellos</nav>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Users
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdownMenu">
                        <Dropdown.Item href="#/location-1">
                            Profile
                        </Dropdown.Item>
                        <Dropdown.Item href="#/location-1">
                            Favourites
                        </Dropdown.Item>
                        <Dropdown.Item href="#/location-1">
                            Settings
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <nav>Profile</nav>
            </header>
        </div>
    );
};
