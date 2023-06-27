function TestimonialCard (props) {
    return (
        <article className="testimonialCard">
            <img src={props.image} alt="restaurant reviews" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default TestimonialCard;