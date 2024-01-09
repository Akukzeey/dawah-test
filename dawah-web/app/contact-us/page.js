'use client'
import {usePathname} from "next/navigation";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {useEffect} from "react";
import { FaLocationDot } from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import BackGroundImage from "@/components/BackGroundImage";

export default function Contact() {
    const [colRef1, inCol1] = useInView({
        triggerOnce: true,
    });
    const [colRef2, inCol2] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    const pathname = usePathname();

    const formattedPathname = pathname.substring(1).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').toUpperCase();

    function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_ayn69y8','template_q3xhojv',e.target,'t3VS4eroyAc9qrFP8').then((result) => {
            console.log(result.text);
            toast.success('Form submitted successfully!');
        }, (error) => {
            console.log(error.text);
            toast.error('Error submitting form.');
        });
    }

    return(
        <div id='contact-us'>
            <BackGroundImage img='/images/Contact/contact-bg-img.jpg' header={formattedPathname}/>
            <div className='contact-hr'>
                <div className='d-flex justify-content-end'>
                    <h1 className='contact-url'>
                        HOME / <span className='contact-span'>{formattedPathname}</span>
                    </h1>
                </div>
            </div>
                <div className='row' style={{margin:'0px 50px'}}>
            <motion.form
                ref={colRef1}
                initial={{ opacity: 0, x: '-100%' }}
                animate={inCol1 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='col-lg-6 col-md-12 mt-3'
                onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name (required)</label>
                    <input type="text" name='name' className="form-control" id="name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Your Number (required)</label>
                    <input type="tel" name='phone-number' className="form-control" id="number" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email (required)</label>
                    <input type="email" name='user-email' className="form-control" id="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" name='subject'  className="form-control" id="subject" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Send your message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" name='message' rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <input type="submit" className='btn btn-success' value='send email'/>
                </div>
            </motion.form>
                <motion.div
                    ref={colRef2}
                    initial={{ opacity: 0, x: '100%' }}
                    animate={inCol2 ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className='col-lg-6 col-md-12 mt-3 contact-details'>
                    <h4 style={{color:'#132d46',marginBottom:'15px'}}>Send a message</h4>
                    <div className='d-flex'>
                        <FaLocationDot className='me-3'/>
                        <p>United States</p>
                    </div>
                    <div className='d-flex'>
                        <FaPhone className='me-3'/>
                        <p>+(651) 224-6722</p>
                    </div>
                    <div className='d-flex'>
                        <MdEmail className='me-3'/>
                        <p>info@mndawaacademy.com</p>
                    </div>
                    <div className='d-flex'>
                        <FaGlobe className='me-3'/>
                        <p>www.mndawaacademy.com</p>
                    </div>
                    <div className='mb-5'>
                        <h4 style={{color:'#132d46',margin:'20px 0 10px 0'}}>Dawah Academy</h4>
                        <p> If you have any questions or are having technical difficulties, feel free to Contact Us or give us a call.</p>
                        <div>
                            <FaInstagram className='me-3'/>
                            <FaFacebook className='me-3'/>
                            <FaTwitter className='me-3'/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}