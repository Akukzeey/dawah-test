'use client'
import BackGroundImage from "@/components/BackGroundImage";
import {usePathname} from "next/navigation";
import Image from "next/image";

export default function QuranCourse() {
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
                        <h1 className='dynamic-header'>Quranic Curriculum</h1>
                        <p>Program for all</p>
                        <div>
                            <div className='dynamic-header-container'>
                                <h2 className='dynamic-h2'>Instructors :</h2>
                                <h3 className='dynamic-h3'>Multiple</h3>
                            </div>
                            <div className='dynamic-header-container'>
                                <h2 className='dynamic-h2'>Stars On :</h2>
                                <h3 className='dynamic-h3'>Multiple</h3>
                            </div>
                            <div className='dynamic-header-container'>
                                <h2 className='dynamic-h2'>Length :</h2>
                                <h3 className='dynamic-h3'>Kindergarten - Twelfth Grade</h3>
                            </div>
                            <div className='d-flex'>
                                <h2 className='dynamic-h2'>Course ID :</h2>
                                <h3 className='dynamic-h3'>QRM001</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{margin:'50px 0 0 0'}}/>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h4 mb-3'>Summary</h4>
                    <div className='dynamic-border-left'>
                        <p className='dynamic-p-tag'>
                            Students are expected to engage deeply with Islamic teachings, memorize verses, understand their meanings, and apply moral and spiritual lessons to daily life. Emphasis is on fostering a strong connection with the Quran, promoting ethical behavior, and nurturing a lifelong commitment to Islamic principles. .
                        </p>
                    </div>
                </div>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h4 mb-3'>Quranic Curriculum</h4>
                    <div className='dynamic-border-left'>
                        <ul>
                            <li className='dynamic-li-tags'>Kindergarten: Surah Al-Fatiha to Al-‘Adiyat</li>
                            <li className='dynamic-li-tags'>First Grade: Surah Al-Fatiha to Al-A’la</li>
                            <li className='dynamic-li-tags'>Second Grade: Surah Al-Fatiha to Al-Mutaffifin</li>
                            <li className='dynamic-li-tags'>Third Grade: Surah Al-Fatiha to An-Naba (1 juz)</li>
                            <li className='dynamic-li-tags'>Fourth Grade: Surah Al-Fatiha to Al-Jinn (11⁄2 juz)</li>
                            <li className='dynamic-li-tags'>Fifth Grade: Surah Al-Fatiha to Al-Mulk (2 juz)</li>
                            <li className='dynamic-li-tags'>Sixth Grade: Surah Al-Fatiha to Al-Jumu’aha (21⁄2 juz)</li>
                            <li className='dynamic-li-tags'>Seventh Grade: Surah Al-Fatiha to Al-Mujadila (3 juz)</li>
                            <li className='dynamic-li-tags'>From Grade Eighth to Twelfth: Surah Al-Fatiha to Adh-Dhariyat (4 juz)</li>
                        </ul>
                    </div>
                </div>
                <div className='dynamic-details-container'>
                    <h4 className='dynamic-h4 mb-3'>Expectations</h4>
                    <div className='dynamic-border-left'>
                        <ul>
                            <li className='dynamic-li-tags'>Kindergarteners will be expected to memorize 1 verse every other day</li>
                            <li className='dynamic-li-tags'>First graders will be expected to memorize 2 verses everyday</li>
                            <li className='dynamic-li-tags'>Second graders will be expected to memorize 3 verses everyday</li>
                            <li className='dynamic-li-tags'>Third graders will be expected to memorize 4 verses everyday</li>
                            <li className='dynamic-li-tags'>Fourth graders will be expected to memorize 5 verses everyday</li>
                            <li className='dynamic-li-tags'>Fifth graders will be expected to memorize 4 lines everyday</li>
                            <li className='dynamic-li-tags'>Sixth graders will be expected to memorize 5 lines everyday</li>
                            <li className='dynamic-li-tags'>Seventh until twelfth graders will be expected to memorize a half page everyday</li>
                            <li className='dynamic-li-tags'>Fourth until sixth graders are required to memorize Tuhfat Al-Atfal</li>
                            <li className='dynamic-li-tags'>Seventh until twelfth graders are required to memoize Tuhfat Al-Atfal and The Jazariyyah (Tajwīd) Poem</li>
                        </ul>
                    </div>
                </div>
                <div className='dynamic-details-container'>
                    <div className='d-flex'>
                        <h3 className='dynamic-h3 me-2'>Note:</h3>
                        <h4 className='dynamic-h5'>All students that attend other quranic institutes outside of Dawah Academy are required to do a half page for 3 days (Mon, Wed, Thurs) and will continue to follow the quranic curriculum alongside their peers and classmates.</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}