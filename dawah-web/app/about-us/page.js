'use client'
import PageComponent from "@/components/PageComponent";
import BackGroundImage from "@/components/BackGroundImage";
import {usePathname} from "next/navigation";

export default function About() {

    const pathname = usePathname();

    const formattedPathname = pathname.substring(1).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').toUpperCase();

    const div1 = () =>{
        return(
            <>
                <p>Dawah  Academy proudly provides a diverse and enriching educational experience to students from Kindergarten to 12th grade. Our accomplished faculty and staff are dedicated to nurturing students and guiding them as they develop academically, socially, and personally. Our curriculum is designed to ensure that our students are equipped with the foundational knowledge and skills necessary for future success.
                    In addition to our standard curriculum, we also offer an exceptional Hifz program that accommodates students of all ages. Our unique approach to teaching Quran and Hifz also includes a focus on character development and streamlines tarbiyyah programs.</p>
            </>
        )
    }

    const div2 = () =>{
        return(
            <>
                <p>At Dawah Academy, our vision is to be a leading institution in the United States for holistic Islamic education. We aim to cultivate a vibrant community of learners who excel academically, thrive personally, and embody Islamic values. Our goal is to foster an environment where students not only master the Quran and acquire deep Islamic knowledge but also develop as well-rounded individuals equipped to contribute positively to society. We envision our graduates as future leaders who are intellectually curious, spiritually grounded, and committed to upholding the principles of Islam while engaging constructively with the diverse fabric of American society.</p>
            </>
        )
    }

    const div3 = () =>{
        return(
            <>
                <p>The mission of Dawah Academy is to provide a comprehensive educational experience that balances academic excellence with Islamic learning. Our commitment is to nurture each student’s intellectual, spiritual, and personal growth within an inclusive and supportive environment. We strive to deliver a robust curriculum that includes a strong foundation in Quranic studies, Hifz, and tarbiyyah programs, alongside a rigorous standard academic curriculum. Our approach emphasizes character development, ethical awareness, and the cultivation of a strong Muslim identity. By empowering our students with knowledge, skills, and Islamic values, we prepare them to make meaningful contributions to their communities and the broader world.</p>
            </>
        )
    }

    return(
        <div id='about'>
        <BackGroundImage img='/images/Contact/contact-bg-img.jpg' header={formattedPathname}/>
        <PageComponent
            header='Dawah Academy offers a nurturing educational journey from Kindergarten to 12th grade, blending academic excellence with personal growth. Our dedicated team ensures a strong foundational curriculum, enriched by our unique Hifz program that emphasizes Quranic study and character development. Join us in fostering future success grounded in knowledge and values.'
            imageSrc1='/images/Home/card-1.jpeg'
            header1='About Us'
            div1={div1}
            imageSrc2='/images/Home/card-2.jpeg'
            header2='Vision and Mission'
            div2={div2}
            imageSrc3='/images/Home/card-1.jpeg'
            header3='Mission Statement for Dawah Academy'
            div3={div3}/>
        </div>
    )
}


