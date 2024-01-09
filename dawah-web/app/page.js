'use client'
import React, {Suspense, useEffect} from "react";
import CarouselComponent from "@/components/Carousel";
import Link from "next/link";
import Testimonial from "@/components/testimonials/ScrollShows";
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import Loading from './loading'

export default function Home() {
    const [aboutRef, inAbout] = useInView({
        triggerOnce: true,
    });
    const [programRef, inPrograms] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <div id='Home'>
            <CarouselComponent/>
            <div className='enrollment-section'>
                <h1 className='enrollment-header'>2023-2024 Enrollment</h1>
                <p className='hero-p-tag'> We are now offering new enrollment opportunities. Join our community and benefit from our experienced team of educators and top-notch educational resources.</p>
                <button className='button'>
                   <Link href='/register' className='nav-link'>Register</Link>
                </button>
            </div>
            <motion.div
                ref={aboutRef}
                initial={{ opacity: 0, x: '100%' }}
                animate={inAbout? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='hero-section container'>
                <h1 className='hero-header'>
                    Welcome To <span style={{color: '#313C76'}}>Dawah Academy</span>
                </h1>
                <p className='hero-p-tag '>
                    At Dawah Academy, we have school programs from Kindergarten to 12th grade, and wide range of Islamic courses like Quran and Arabic classes . We have made these programs to fit the needs of our community.
                </p>
                <div className='hero-section-details row'>
                    <div className='d-flex flex-column col-lg-6 col-md-12 text-lg-start text-center' >
                        <p className='hero-p-tag-2'>About us</p>
                        <h1 className='hero-header-2'>
                            Who are we
                        </h1>
                        <p className='hero-p-tag-3'>
                            Dawah  Academy proudly provides a diverse and enriching educational experience to students from Kindergarten to 8th grade. Our accomplished faculty and staff are dedicated to nurturing students and guiding them as they develop academically, socially, and personally. Our curriculum is designed to ensure that our students are equipped with the foundational knowledge and skills necessary for future success.
                            <br className='mt-5'/>
                        </p>
                        <p className='hero-p-tag-3'>
                            In addition to our standard curriculum, we also offer an exceptional Hifz program that accommodates students of all ages. Our unique approach to teaching Quran and Hifz also includes a focus on character development and streamlines tarbiyyah programs.
                        </p>
                        <div className='d-flex justify-content-lg-start justify-content-center mb-4'>
                            <button className='button hero-btn mt-4'>
                                <Link href='about-us' className='nav-link'>
                                    MORE INFO
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="hero-img-container">
                            <Image
                                src="/images/Home/carousel-img-1.jpg"
                                alt="carousel image 1"
                                fill
                                quality={100}
                                sizes="100vw,  100vw, 100vw"
                                priority
                                style={{borderRadius:'5px'}}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                ref={programRef}
                initial={{ opacity: 0, x: '-100%' }}
                animate={inPrograms ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='mb-5 mt-4'>
                <h1 className='enrollment-header'>Our Programs</h1>
                <div className='program-main-div'>
                    <Link className="program" href='/admission/quran-course'>
                        <motion.div
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            className="program__img program__img_1"
                        ></motion.div>
                        <h2 className="program__title">Quran Course</h2>
                        <p className="program__content">Memorize, understand, apply Islamic teachings, fostering strong moral values in students..</p>
                    </Link>
                    <Link className="program" href='#'>
                        <motion.div
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            className="program__img program__img_2"
                        ></motion.div>
                        <h2 className="program__title">Arabic</h2>
                        <p className="program__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    </Link>
                    <Link className="program" href='#'>
                        <motion.div
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            className="program__img program__img_3"
                        ></motion.div>
                        <h2 className="program__title">Hiftz Classes</h2>
                        <p className="program__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    </Link>
                </div>
            </motion.div>
            <div>
                <Testimonial/>
            </div>
        </div>
    )
}
