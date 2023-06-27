import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from '../assets/Hamburger.svg';
import Close from "../assets/close.png"

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    function handleToggle() {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <nav>
            <nav className="hamburgerMenu">
                <img 
                  src="src\assets\Hamburger.svg"
                  alt="Little Lemon Logo"
                  className="navImage" />

                  <button className="burgerButton" onClick={handleToggle}>
                    <img src={navbarOpen ? Close : Hamburger} alt="Navigation bar" />
                  </button>
            </nav>
            <Navigation device="desktop" />
            {navbarOpen ? <Navigation device="mobile" /> : ""}
        </nav>
    );
}

export default Navbar;