import Link from "next/link";
import Image from "next/image";

export default function Register() {
    return(
        <div id='Register'>
            <div className='sign-up-container'>
                <div className='d-flex align-items-center flex-column mb-lg-4 mb-md-3'>
                    <h1 className='sign-up-header'>Create an Account</h1>
                    <Image src='/images/logo-dawah-academy.svg' alt='logo-dawah-academy' className='mb-2' height='100' width='100'/>
                </div>
                <form>
                    <div className="mb-lg-4 mb-md-3 mb-2">
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="first-name"/>
                    </div>
                    <div className="mb-lg-4 mb-md-3 mb-2">
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="last-name"/>
                    </div>
                    <div className="mb-lg-4 mb-md-3 mb-2">
                        <label htmlFor="email" className="form-label">Your Email (required)</label>
                        <input type="email"  className="form-control" id="email" required/>
                    </div>
                    <div className='mb-lg-4 mb-md-3 mb-2'>
                        <label htmlFor="exampleInputPassword1" className="form-label">Password (required)</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  required/>
                    </div>
                    <div className='mb-lg-4 mb-md-3 mb-2'>
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password (required)</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"  required/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input type="submit" className='btn sign-up-btn' value='Sign Up'/>
                    </div>
                </form>
                <div className='sign-up-bottom'>
                    <p>Already have an account? <Link href='/log-in' className='sign-up-link'>Log In</Link> </p>
                </div>
            </div>
        </div>
    )
}