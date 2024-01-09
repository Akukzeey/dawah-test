'use client'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";

export default function Footer() {
    const [footerRef, inFooterView] = useInView({
        triggerOnce: true,
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="footer">
            <div className="footer-content">
                <motion.div
                    ref={footerRef}
                    initial={{ opacity: 0, x: '100%' }}
                    animate={inFooterView ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="footer-top">
                    <div className='footer-logo' style={{ position: 'relative', height: '130px', width: '130px', marginTop: '-40px' }}>
                        <Image src='/images/logo-dawah-academy.png' alt='logo dawah academy' fill  sizes="100vw,  100vw, 100vw"/>
                    </div>
                    <p className='footer-p-tag'>Dawah Academy offers a nurturing educational journey from Kindergarten to 12th grade, blending academic excellence with personal growth. Our dedicated team ensures a strong foundational curriculum, enriched by our unique Hifz program that emphasizes Quranic study and character development. Join us in fostering future success grounded in knowledge and values.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="footer-col">
                    <h4 className='footer-heading'>Contact</h4>
                    <div className='footer-ul'>
                        <div className='d-flex'>
                            <FaLocationDot className='me-3' />
                            <p>United States</p>
                        </div>
                        <div className='d-flex'>
                            <FaPhone className='me-3' />
                            <p>+(651) 224-6722</p>
                        </div>
                        <div className='d-flex'>
                            <MdEmail className='me-3' />
                            <p>info@mndawaacademy.com</p>
                        </div>
                        <div className='d-flex'>
                            <FaGlobe className='me-3' />
                            <p>www.mndawaacademy.com</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={inFooterView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="footer-col">
                    <h4 className='footer-heading'>Quick Links</h4>
                    <ul className='footer-ul'>
                        <li><Link href="/about-us" onClick={scrollToTop}>About Us</Link></li>
                        <li><Link href="/administration" onClick={scrollToTop}>Administration</Link></li>
                        <li><Link href="/admission" onClick={scrollToTop}>Admission</Link></li>
                        <li><Link href="/contact-us" onClick={scrollToTop}>Contact Us</Link></li>
                    </ul>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={inFooterView ? { opacity: 1, y: 0 } : { opacity: 0, y: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='footer-bottom d-flex justify-content-center'>
                <p className='text-center pt-2'>Dawah Academy &copy; {new Date().getFullYear()} </p>
            </motion.div>
        </div>
    )
}
