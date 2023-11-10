import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navBarDiv">
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;