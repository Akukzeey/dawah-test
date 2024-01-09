'use client'
import {usePathname} from "next/navigation";
import Image from "next/image";
import Subjects from '../../components/Subjects'
import BackGroundImage from "@/components/BackGroundImage";
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const AdministrationCard = ({ name, position, image }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='Administration-info'
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='Administration-img-div'
            >
                <Image src={image} alt='vector img male' fill sizes="100vw,  100vw, 100vw"/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='d-flex justify-content-center flex-column mt-3 flex-wrap'
            >
                <motion.h1 className='Administration-h1-tag'>{name}</motion.h1>
                <motion.p className='Administration-p-tag'>{position}</motion.p>
            </motion.div>
        </motion.div>
    );
};

export default function Administration() {
    const pathname = usePathname();

    const formattedPathname = pathname.substring(1).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').toUpperCase();

    const administrators = [
        { name: 'Sheikh Abdulla', position: 'President',image:'/images/Administration/vector-img-male.jpeg' },
        { name: 'Sheikh Hassan', position: 'Deputy President',image:'/images/Administration/vector-img-male.jpeg' },
        { name: 'Sheikha Amina', position: 'Secretary',image:'/images/Administration/vector-img-female.jpeg' },
        { name: 'Sheikha Salma', position: 'Teacher',image:'/images/Administration/vector-img-female.jpeg' },
        { name: 'Sheikh Yahya', position: 'Treasurer',image:'/images/Administration/vector-img-male.jpeg' },
        { name: 'Sheikh Yunus', position: 'Developer',image:'/images/Administration/vector-img-male.jpeg' },
        { name: 'Sheikha Amina', position: 'Teacher',image:'/images/Administration/vector-img-female.jpeg' },
        { name: 'Sheikha Ali', position: 'Teacher',image:'/images/Administration/vector-img-male.jpeg' },
        { name: 'Sheikha Maymuna', position: 'Teacher',image:'/images/Administration/vector-img-female.jpeg' },
    ];


    return(
    <div id='Administration'>
        <BackGroundImage img='/images/Contact/contact-bg-img.jpg' header={formattedPathname}/>
        <div className='Administration-hr'>
            <div className='d-flex justify-content-end'>
                <h1 className='Administration-url'>
                    HOME / <span className='Administration-span'>{formattedPathname}</span>
                </h1>
            </div>
        </div>
        <div className='mb-5'>
            <p  className='Administration-header'>
                The member of the administrative team are employed by the principle to execute Dawah Academy&apos;s
                mission and goals and manage the daily operations of the institution:
            </p>
        </div>
        <div className='Administration-cards-layout'>
            {administrators.map((admin, index) => (
                <AdministrationCard key={index} name={admin.name} position={admin.position} image={admin.image} />
            ))}
        </div>
        <div className='Administration-subjects'>
            <h1 className='Administration-h2-tag'>Our Subjects</h1>
            <div className='subject-container'>
                <div className='subject-items'>
                    <Subjects/>
                    <p className='subject-p-tag'>Swipe to see other subjects</p>
                </div>
            </div>
        </div>
    </div>
)
}