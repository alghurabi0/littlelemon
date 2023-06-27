import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Greeksalad from '../../../assets/greek-salad.jpg';
import Lemondessert from '../../../assets/lemon-dessert.jpg';
import Bruchetta from '../../../assets/bruchetta.svg';
import SpecialCard from './CardInfo/SpecialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={Greeksalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Bruchetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <SpecialCard image={Lemondessert} name="Lemon Dessert" price="$7.99" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    )
}