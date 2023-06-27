import { Link } from 'react-router-dom';
import Pic1 from '../../../assets/food1.png';
function Hero() {
    return (
        <header>
            <article className="heroArticle">
                <section className="heroText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                <br></br>
                <Link className="heroButton" to="/reservations">Reserve a table</Link>
                </section>

                <section className="heroImage">
                <img
                  src={Pic1}
                  alt="Little Lemon Restaurant" />
                </section>
            </article>
        </header>
    );
}

export default Hero;