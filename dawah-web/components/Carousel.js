import React from "react";
import Link from 'next/link'
import Image from "next/image";

export default function Carousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className='carousel-p-tag text-white'>
                    <p>Empowering the next generation of Ummah leaders</p>
                    <button type="button" className="button mx-2">
                        <Link className="nav-link" href='/contact-us'>
                            Contact Us
                        </Link>
                    </button>
                </div>
                <div className="carousel-item active">
                    <div className="carousel-img-container">
                        <Image
                            src="/images/Home/carousel-img-1.jpg"
                            alt="carousel image 1"
                            fill
                            quality={75}
                            priority
                            sizes="100vw,  100vw, 100vw"
                             />
                    </div>
                    <div className="image-overlay"></div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-img-container">
                        <Image
                            src="/images/Home/carousel-img-3.jpg"
                            alt="carousel image 2"
                            fill
                            quality={75}
                            priority
                            sizes="100vw,  100vw, 100vw"
                             />
                    </div>
                    <div className="image-overlay"></div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-img-container">
                        <Image
                            src="/images/Home/carousel-img-1.jpg"
                            alt="carousel image 3"
                            fill
                            quality={75}
                            priority
                            sizes="100vw,  100vw, 100vw"
                             />
                    </div>
                    <div className="image-overlay"></div>
                </div>
            </div>
            <button
                className="carousel-control-prev d-flex justify-content-start"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next d-flex justify-content-end"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}



