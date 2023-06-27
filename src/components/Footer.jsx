import { Link } from "react-router-dom";
import FooterLogo from '../assets/footer-logo.png';
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="imgFooter">
          <img
            src={FooterLogo}
            alt="Little Lemon logo"
          />
        </li>
        <li className="contact">
          <h1 className="footerHeader">Navigation</h1>
          <ul className="footerLinks">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href="../assets/menu.webp"
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footerHeader">Contact</h1>
          <ul className="footerLinks">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <br></br>
            <li>(629)-243-6827</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footerHeader">Connect</h1>
          <ul className="footerLinks">
            <a
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}
