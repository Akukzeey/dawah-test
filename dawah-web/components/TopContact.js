import {FaLocationDot, FaPhone} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {FaClock} from "react-icons/fa";

export default function TopContact() {
    return(
        <div className='top-contact-container'>
            <div className='d-flex'>
                <div className='d-flex align-items-center me-3'>
                    <FaLocationDot className='me-2'/>
                    <p className='top-contact-p-tag'>United States</p>
                </div>
                <div className='d-flex align-items-center'>
                    <FaPhone className='me-2'/>
                    <p className='top-contact-p-tag'>+(651) 224-6722</p>
                </div>
            </div>
            <div className='d-flex '>
                <div className='d-flex align-items-center me-3'>
                    <MdEmail className='me-2'/>
                    <p className='top-contact-p-tag'>info@mndawaacademy.com</p>
                </div>
                <div className='d-flex align-items-center me-2'>
                    <FaClock className='me-2'/>
                    <p className='top-contact-p-tag'>Mon - Fri: 8AM - 5PM</p>
                </div>
            </div>
        </div>
    )
}