'use client'
import {useEffect} from "react";
import Image from "next/image";
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";

export default function Register() {

    const [colRef1, inCol1] = useInView({
        triggerOnce: true,
    });
    const [colRef2, inCol2] = useInView({
        triggerOnce: true,
    });
    const [colRef2B, inCol2B] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return(
        <div id='Admission'>
            <div className='admission-background-img'>
                <h1 className='admission-background-header'>OUR CURRENT PROGRAMS</h1>
                <div className='background-img-containers'>
                    <Link href='/admission/quran-course' className='background-img-items'>
                        <h1 className='background-img-items-header'>Quran Course</h1>
                    </Link>
                    <Link href='#' className='background-img-items'>
                        <h1 className='background-img-items-header'>Syllabus</h1>
                    </Link>
                    <Link href='#' className='background-img-items'>
                        <h1 className='background-img-items-header'>Weekend School</h1>
                    </Link>
                    <Link href='#' className='background-img-items'>
                        <h1 className='background-img-items-header'>Quran Curriculum</h1>
                    </Link>
                </div>
            </div>
            <div className='mb-5 mt-5 card-left-right'>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='register-header'>
                    Quran Course
                </motion.h1>
                <div className='register-main-container row'>
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='register-img-container col-6'>
                        <Image src='/images/Home/card-2.jpeg' alt='register image 1' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </motion.div>
                    <motion.div
                        ref={colRef1}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={inCol1 ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='register-details-container col-6'>
                        <h2 className='register-h1'>Details</h2>
                        <div className='d-flex justify-content-between my-4'>
                            <p className='register-p-tag'>Grades</p>
                            <p className='register-p-tag'>1st to 8th</p>
                        </div>
                        <div className='d-flex justify-content-between my-4'>
                            <p className='register-p-tag'>Timings</p>
                            <p className='register-p-tag'>8:30m - 3:15am</p>
                        </div>
                        <div className='d-flex justify-content-between my-4'>
                            <p className='register-p-tag'>Length</p>
                            <p className='register-p-tag'>1 year</p>
                        </div>
                        <div className='d-flex justify-content-between my-4'>
                            <p className='register-p-tag'>Starts On</p>
                            <p className='register-p-tag'>August 2023</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='button'>Read More</button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='card-right-left'>
                <motion.h1
                    ref={colRef2}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inCol2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='register-header'>
                    Weekend School
                </motion.h1>
                <div className='register-main-container row'>
                    <motion.div
                        ref={colRef2}
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={inCol2 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='register-details-container register-details-container-2 col-lg-6 col-md-12'>
                        <h2 className='register-h1'>Details</h2>
                        <div className='d-flex justify-content-between my-4'>
                            <p className='register-p-tag'>Grades</p>
                            <p className='register-p-tag'>1st to 8th</p>
                        </div>
                        <div className='d-flex justify-content-between my-4'>
                            <p className='register-p-tag'>Timings</p>
                            <p className='register-p-tag'>8:30m - 3:15am</p>
                        </div>
                        <div className='d-flex justify-content-between my-4'>
                            <p className='register-p-tag'>Length</p>
                            <p className='register-p-tag'>1 year</p>
                        </div>
                        <div className='d-flex justify-content-between my-4'>
                            <p className='register-p-tag'>Starts On</p>
                            <p className='register-p-tag'>August 2023</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className='button'>Read More</button>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={colRef2B}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={inCol2B ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='register-img-container col-lg-6 col-md-12'>
                        <Image src='/images/Register/regsiter-img-2.jpg' alt='register image 1' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
