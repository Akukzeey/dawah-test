import Image from "next/image";
import Link from "next/link";
import SideBar from "@/components/SideBar";

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" id='navbar' style={{height:'100px'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/" style={{height:'100px',width:'150px',position:'relative'}}><Image src='/images/logo-dawah-academy.svg' alt='favicon-dawah-academy' fill/></Link>
                <SideBar/>
                <div className="collapse navbar-collapse navbar-light bg-light" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-3">
                            <Link className="nav-link" aria-current="page" href="/">HOME</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" href='/about-us'>ABOUT US</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" href="/administration">ADMINISTRATION</Link>
                        </li>
                        <li className="btn-group ">
                            <Link href='/admission' className="nav-link">
                                ADMISSION
                            </Link>
                            <div className="dropdown-toggle dropdown-toggle-split dropdown-ul" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}>
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </div>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/admission/quran-course">Quran Course</Link></li>
                                <li><Link className="dropdown-item" href="/admission/syllabus">Our Syllabus</Link></li>
                                <li><Link className="dropdown-item" href="#">After School Maktab</Link></li>
                            </ul>
                         </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" href='/contact-us'>CONTACT US</Link>
                        </li>
                    </ul>
                    <div className="btn-group me-3">
                        <button className="btn-success button-navbar  btn-sm" type="button">
                            <Link  className="nav-link" href='/register'>
                                REGISTER NOW
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
