import TestimonialCard from "./CardInfo/TestimonialCard";
import Adrian from '../../../assets/about1.jpg';
import Mario from '../../../assets/about2.jpg';

export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonialsTopbar">
                <h1>Testimonials</h1>
            </article>

            <section className="testimonialsCards">
                <TestimonialCard image={Adrian} name="Adrian" description="This is the best Mediterranean food that I've ever had!" />
                <TestimonialCard image ={Mario} name="Mario" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here." />
            </section>

        </section>
    );
}