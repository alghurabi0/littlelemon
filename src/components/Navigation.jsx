import { Link } from "react-router-dom";
import Logo from '../assets/Logo .svg';
import Menu from '../assets/menu.webp';
function Navigation(props) {
    return (
        <menu className={`navbarMenu ${props.device}`}>
            {props.device === "mobile" ? (
                ""
            ) : (
                <Link to="/">
                    <img
                      src={Logo}
                      alt="Little Lemon Logo"
                      className="navImage" />
                </Link>
            )}
            <Link className="navStyling" to="/">
                <h1>Home</h1>
            </Link>
            <Link className="navStyling" to="About">
                <h1>About</h1>
            </Link>
            <a
              className="navStyling"
              href={Menu}
              target="_blank"
              rel="noreferrer"
              >
                <h1>Menu</h1>
              </a>
            <Link className="navStyling" to="/reservations">
                <h1>Reservation</h1>
            </Link>
            <Link className="navStyling" to="/order">
                <h1>Order online</h1>
            </Link>
            <Link className="navStyling" to="/login">
                <h1>Login</h1>
            </Link>
        </menu>
    )
}

export default Navigation;