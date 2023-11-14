import React from 'react';
import Slide from './avis/avis'; 

function Testimonials() {


    const testimonialData = [
        {
            id: 1,
            name: "Eric",
            img: "", 
            review: "Je suis ravi d'avoir découvert The Tip Top, leurs thés biologiques sont d'une qualité exceptionnelle et l'engagement envers l'environnement est réel. Une entreprise à soutenir !",
            rating: 5,
        },
        {
            id: 2,
            name: "Eric",
            img: "", 
            review: "Je suis ravi d'avoir découvert The Tip Top, leurs thés biologiques sont d'une qualité exceptionnelle et l'engagement envers l'environnement est réel. Une entreprise à soutenir !",
            rating: 5,
        },
        {
            id: 3,
            name: "Eric",
            img: "", 
            review: "Je suis ravi d'avoir découvert The Tip Top, leurs thés biologiques sont d'une qualité exceptionnelle et l'engagement envers l'environnement est réel. Une entreprise à soutenir !",
            rating: 5,
        },
        {
            id: 3,
            name: "Eric",
            img: "", 
            review: "Je suis ravi d'avoir découvert The Tip Top, leurs thés biologiques sont d'une qualité exceptionnelle et l'engagement envers l'environnement est réel. Une entreprise à soutenir !",
            rating: 5,
        }
    ];

    return (
        <section className="container mt-4">
        <div className="row">
            <Slide data={testimonialData} slidesPerView={3} />
        </div>
    </section>
    );
}

export default Testimonials;
