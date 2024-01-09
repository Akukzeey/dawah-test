'use client'
import React, {useState, useEffect, useCallback} from 'react';
import Link from 'next/link'

const SideBar = () => {
    const [sidebarWidth, setSidebarWidth] = useState(0);

    const openNav = () => {
        const widthPercentage = 90;
        const viewportWidth = window.innerWidth;
        const widthInPixels = (widthPercentage / 100) * viewportWidth;
        setSidebarWidth(widthInPixels);
    };

    const closeNav = useCallback(() => {
        setSidebarWidth(0);
    }, [setSidebarWidth]);

    const delayCloseNav = () => {
        setTimeout(() => {
            setSidebarWidth(0);
        }, 300);
    };

    const handleOutsideClick = useCallback((event) => {
        if (sidebarWidth !== 0 && !event.target.closest('.sidenav')) {
            closeNav();
        }
    }, [closeNav, sidebarWidth]);

    const handleResize = useCallback(() => {
        if (sidebarWidth !== 0) {
            const widthPercentage = 90;
            const viewportWidth = window.innerWidth;
            const widthInPixels = (widthPercentage / 100) * viewportWidth;
            setSidebarWidth(widthInPixels);
        }
    }, [setSidebarWidth, sidebarWidth]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [handleOutsideClick, handleResize, sidebarWidth]);


    return (
        <div>
            <div id="mySidenav" className="sidenav" style={{ width: sidebarWidth, right: 0, }}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <Link href="/" className='side-nav-link' onClick={delayCloseNav}>HOME <hr/></Link>
                <Link href="/about-us" className='side-nav-link' onClick={delayCloseNav}>ABOUT US <hr/></Link>
                <Link href="/administration" className='side-nav-link' onClick={delayCloseNav}>ADMINISTRATION <hr/></Link>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item accordion-sidebar">
                        <h2 className="accordion-header d-flex">
                            <Link href='/admission' className="accordion-link" onClick={delayCloseNav}>
                                ADMISSION
                            </Link>
                            <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <ul className="accordion-body">
                                    <li className="accordion-li"><Link className="accordion-links" href="/admission/quran-course" onClick={delayCloseNav}>Quran Course</Link></li>
                                    <li className="accordion-li"><Link className="accordion-links" href="/admission/syllabus" onClick={delayCloseNav}>Our Syllabus</Link></li>
                                    <li className="accordion-li"><Link className="accordion-links" href="#" onClick={delayCloseNav}>After School Maktab</Link></li>
                                </ul>
                        </div>
                    </div>
                </div>
                <hr className='side-bar-hr'/>
                <Link href="/contact-us" className='side-nav-link' onClick={delayCloseNav}>CONTACT US <hr/></Link>
                <button type="button" className="button side-nav-button mt-2" onClick={delayCloseNav}>
                    <Link  className="nav-link" href='/register'>
                        REGISTER NOW
                    </Link>
                </button>
            </div>

            <span className='side-bar-icon' style={{ fontSize: '40px',marginRight:'20px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
        </div>
    );
};

export default SideBar;

