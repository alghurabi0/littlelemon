import Adrian from '../../../assets/about1.jpg';
import Mario from '../../../assets/about2.jpg';

export default function About() {
    return (
        <article className="aboutUs">
            <section className="heroText">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="aboutSubtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>

            <section className="doubleImage">
                <img className="about1" src={Adrian} alt="Little Lemon restaurant cuisine 1" />
                <img className="about2" src={Mario} alt="Little Lemon restaurant cuisine 2" />
            </section>
    </article>
    );
}