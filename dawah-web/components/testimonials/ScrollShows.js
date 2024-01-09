import React from 'react';

import dynamic from 'next/dynamic';

const ScrollShow = dynamic(() => import('@/components/testimonials/ScrollCarouselComponent'), { ssr: false });

const ScrollShows = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-between p-24' style={{marginTop:'100px'}}>
            <div className='text-center'>
                <h1 className='enrollment-header mb-3'>What Parents Say About Us About Us</h1>
                <p className='testimonial-text mb-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consectetur culpa et id in iste libero maxime temporibus vel?
                </p>
            </div>
            <ScrollShow/>
        </div>
    );
};

export default ScrollShows;