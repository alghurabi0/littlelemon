import HeroImage from "../../../assets/hero-image.jpg";

export default function Login() {
    return (
        <header className="reserveTable">
            <img
              className="headerReserve"
              src={HeroImage}
              alt="Little Lemon Ingredients"
              />
              <div className="reserveHeaderText">
                <h1>Login</h1>
              </div>
        </header>
    );
}