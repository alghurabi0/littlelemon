import HeroImage from "../../../assets/hero-image.jpg";

export default function Heading() {
    return (
        <header className="reserveTable">
            <img
              className="headerReserve"
              src={HeroImage}
              alt="Little Lemon Ingredients"
              />
              <div className="reserveHeaderText">
                <h1>About us</h1>
              </div>
        </header>
    );
}