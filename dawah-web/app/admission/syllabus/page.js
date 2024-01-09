'use client'
import BackGroundImage from "@/components/BackGroundImage";
import {usePathname} from "next/navigation";
import Image from "next/image";

export default function Syllabus() {
    const pathname = usePathname();

    const dynamicPart = pathname.replace(/^\/admission\//, '');

    const formattedPathname = dynamicPart
        .split('-')
        .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
        .join(' ')
        .toUpperCase();

    return(
        <div id='dynamic-component'>
            <BackGroundImage img='/images/Register/register-bg-img.jpg' header={formattedPathname}/>
            <div className='dynamic-hr'>
                <div className='d-flex justify-content-end'>
                    <h1 className='dynamic-url'>HOME / <span className='dynamic-span'>{formattedPathname}</span></h1>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex flex-lg-row flex-column'>
                    <div className='dynamic-container-img'>
                        <Image src='/images/Home/card-1.jpeg' alt='card image' fill quality={100} sizes="100vw,  100vw, 100vw"/>
                    </div>
                    <div className='mt-lg-0 mt-2'>
                        <h1 className='dynamic-header'>Dawah Academy Islamic Studies and Tarbiyah Syllabus</h1>
                        <p>Program for all</p>
                        <div>
                            <div className='dynamic-header-container'>
                                <h2 className='dynamic-h2'>Instructors :</h2>
                                <h3 className='dynamic-h3'>Multiple</h3>
                            </div>
                            <div className='dynamic-header-container'>
                                <h2 className='dynamic-h2'>From:</h2>
                                <h3 className='dynamic-h3'>Sept. 2023</h3>
                            </div>
                            <div className='dynamic-header-container'>
                                <h2 className='dynamic-h2'>To :</h2>
                                <h3 className='dynamic-h3'>June 15, 2024</h3>
                            </div>
                            <div className='d-flex'>
                                <h2 className='dynamic-h2'>Length :</h2>
                                <h3 className='dynamic-h3'>Kindergarten - Twelfth Grade</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{margin:'50px 0 0 0'}}/>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h4 mb-3'>Summary</h4>
                    <div className='dynamic-border-left'>
                        <p className='dynamic-p-tag'>
                            At Dawah Academy, our Syllabus cultivates Quranic proficiency, ethical values, and a lifelong commitment to Islamic principles through comprehensive study and practical application.
                        </p>
                    </div>
                </div>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h4 mb-3'>Grade K-2</h4>
                    <h2 className='dynamic-header'>Goals: The child must know basic of Aqidah, read and write the Quran, can pray and well mannered.</h2>
                    <div className='dynamic-border-left'>
                        <ul>
                            <li className='dynamic-li-tags'>Master Higaada with Green Book</li>
                            <li className='dynamic-li-tags'>Quran Memorization (minimum 10 surah up ½ juz) with minimum tafsiir of 5 surah</li>
                            <li className='dynamic-li-tags'>Basic Aqiidah and Adab (Manners)</li>
                            <li className='dynamic-li-tags'>Basics of Dhahara and Salat</li>
                        </ul>
                    </div>
                </div>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h4 mb-3'>Grade 3-4</h4>
                    <h2 className='dynamic-header'>Goals: The child must read and write well, can pray well, basic Aqidah and high level of adab.</h2>
                    <div className='dynamic-border-left'>
                        <ul>
                            <li className='dynamic-li-tags'>Quran Memorization ( min. ½ juz Ama if they can read and write otherwise student will be placed reading and writing class</li>
                            <li className='dynamic-li-tags'>Green Book and Basic Arabic language</li>
                            <li className='dynamic-li-tags'>Basic Tajwiid book with Tafsiir Juz Ama, Minimum 20 surah</li>
                            <li className='dynamic-li-tags'>Aqiidah, adab book and Tarbiyah</li>
                            <li className='dynamic-li-tags'>Dhahar and Salat</li>
                        </ul>
                    </div>
                </div>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h4 mb-3'>Grade 5,6,7  ( Part of Machad 4yr Macahad Du&apos;aat Program) </h4>
                    <h2 className='dynamic-header'>Goals: Student become Da&apos;ii and Assistant Imam.</h2>
                    <div className='dynamic-border-left'>
                        <ul>
                            <li className='dynamic-li-tags'>Quran memorization with reading and writing practices</li>
                            <li className='dynamic-li-tags'>Studying Tajweed book</li>
                            <li className='dynamic-li-tags'>Tafsiir Juz Ama minimum ½ Juz tafsiir of Sura with its wisdoms and adab plus Tarbiya</li>
                            <li className='dynamic-li-tags'>Aqidah book to master basic aqiidah</li>
                            <li className='dynamic-li-tags'>Tazkiya to teach how to have a clean akhlaq and Tarbiyah</li>
                            <li className='dynamic-li-tags'>Salat book to learn all basic Taharah and Salat rules</li>
                            <li className='dynamic-li-tags'>Fiqi of Fasting</li>
                            <li className='dynamic-li-tags'>Arabic One</li>
                            <li className='dynamic-li-tags'>Book of 100 important questions and answers about Islam</li>
                        </ul>
                    </div>
                </div>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h4 mb-3'>Grade 8-12 ( Part of Machad 4yr Macahad Du&apos;aat Program)</h4>
                    <h2 className='dynamic-header'>Goals: Student become Da&apos;ii and Assistant Imam.</h2>
                    <div className='dynamic-border-left'>
                        <ul>
                            <li className='dynamic-li-tags'>Quran memorization with writing and reading practices</li>
                            <li className='dynamic-li-tags'>Studying Tajweed book</li>
                            <li className='dynamic-li-tags'>Aqidah book to master basic aqiidah</li>
                            <li className='dynamic-li-tags'>Fiqi of Fasting</li>
                            <li className='dynamic-li-tags'>Tazkiya to teach how to have a clean akhlaq and Tarbiyah</li>
                            <li className='dynamic-li-tags'>Salat book to learn all rules of Taharah and Salat rules</li>
                            <li className='dynamic-li-tags'>Speech and Dawah Course</li>
                            <li className='dynamic-li-tags'>Book of 100 important questions and answers about Islam</li>
                        </ul>
                    </div>
                </div>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h5'>More information please contact +(651)224-6722.</h4>
                </div>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h5'>Prepared By Imam Hassan Jaamici.</h4>
                    <h4 className='dynamic-h5'>Imam/President of Minnesota Dawah Institute.</h4>
                </div>
            </div>
        </div>
    )
}