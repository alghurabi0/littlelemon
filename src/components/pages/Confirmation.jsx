import Wawa from '../../assets/food1.png'
import Menu from '../../assets/menu.webp'
import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <header className="confirmationHeader">
      <img
        className="confirmationImage"
        src={Wawa}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserveHeaderText">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>

      <section className="redirectButtons">
        <a
          className="redirectButton"
          href={Menu}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirectButton" to="/order">
          Order Online
        </Link>
        <Link className="redirectButton" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
