import { Link } from 'react-router-dom';

export default function SpecialCard(props) {
    return (
        <article className="specialCard">
            <img src={props.image} alt="Special Menu" />
            <section className="specialCardText">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
                <p>{props.description}</p>
                <Link className="specialCardButton" to="/order">Order for Delivery</Link>
            </section>
        </article>
    )
}