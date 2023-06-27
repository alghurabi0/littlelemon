import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
import Adrian from "../../../assets/about1.jpg";
import Mario from "../../../assets/about2.jpg";
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard image={Adrian} name="Adrian" description="This is the best Mediterranean food that I've ever had!" />
                <TestimonialCard image={Mario} name="Mario" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here." />
        </Carousel>
    )
}