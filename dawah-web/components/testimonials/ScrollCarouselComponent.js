 'use client';
 import React,{useRef} from 'react';
 import ScrollCarousel from 'scroll-carousel-react';
 import 'node_modules/scroll-carousel/dist/scroll.carousel.min.css';
 import Image from "next/image";

 const Testimonial = ({ text, avatar, name }) => (
     <div className='testimonial'>
         <div className='testimonial-author'>
             <div className='testimonial-div-img'>
                 <Image src={avatar} alt={`${name}'s Avatar`} className='testimonial-avatar' fill sizes="100vw,  100vw, 100vw"/>
             </div>
             <p className='testimonial-name'>{name}</p>
         </div>
         <p className='testimonial-text'>{text}</p>
     </div>
 );

 const TestimonialCarousel = () => {

     const carouselRef = useRef(null);

     const handleEnd = () => {
         carouselRef.current && carouselRef.current.goto(0);
     };


     const testimonials = [
         {
             text: "Dawah Academy: A nurturing haven for our child's education. Grateful for its positive impact on their Islamic learning journey. ",
             avatar: '/images/Home/avatar-img-1.jpeg',
             name: 'Yasmin Hassan'
         },
         {
             text: "Dawah Academy stands out with dedicated teachers, fostering a love for learning and a strong connection to our faith. A truly enriching experience!",
             avatar: '/images/Home/avatar-img-2.jpeg',
             name: 'Nusaibah Abdallah'
         },
         {
             text: "Exceptional educators at Dawah Academy shape not just students but future leaders. Grateful for the holistic education and positive atmosphere",
             avatar: '/images/Home/avatar-img-3.jpeg',
             name: 'Salma Mohammed'
         },
         {
             text: "Choosing Dawah Academy was a wise decision. The warm, inclusive environment and emphasis on character development have positively shaped our child's educational experience.",
             avatar: '/images/Home/avatar-img-4.jpeg',
             name: 'Asha Mohammed'
         },
     ];

     return (
         <ScrollCarousel
             autoplay
             autoplaySpeed={8}
             speed={4}
             margin={30}
             onEnd={handleEnd}
             ref={carouselRef}
         >
             {testimonials.map((testimonial, index) => (
                 <Testimonial key={index} {...testimonial} />
             ))}
         </ScrollCarousel>
     );
 };

 export default TestimonialCarousel;