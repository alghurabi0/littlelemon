import SpecialCard from './CardInfo/SpecialCard';
import Greeksalad from '../../../assets/greek-salad.jpg';
import Bruchetta from '../../../assets/bruchetta.svg';
import Lemondessert from '../../../assets/lemon-dessert.jpg';
import Carousel from './SpecialsCarousel'
export default function Specials() {
    return (
        <section className="specials">
            <article className="specialsTopbar">
                <h1>This week's specials</h1>
                <a className="heroButton" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online menu</a>
            </article>

            <section className="specialsCards">
                <SpecialCard image={Greeksalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil." />
                 <SpecialCard image={Bruchetta} name="Bruchetta" price="16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil." />
                 <SpecialCard image={Lemondessert} name="Lemon Dessert" price="7.99" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest." />
            </section>

            <section className="specialsCarousel">
                <Carousel />
            </section>
        </section>
    );
}