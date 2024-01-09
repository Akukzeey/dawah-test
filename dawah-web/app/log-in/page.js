import Image from "next/image";
import Link from "next/link";

export default function LogIn() {
    return(
        <div id='log-in'>
            <div className='log-in-container'>
                <div className='d-flex align-items-center flex-column mb-4'>
                    <h1 className='log-in-header'>Welcome To</h1>
                    <Image src='/images/logo-dawah-academy.svg' alt='logo-dawah-academy' className='mb-5' height='100' width='100'/>
                </div>
                <form>
                    <input type="email" name='email' className="form-control mb-4" id="email" placeholder='Email'  required/>
                    <input type="password" className="form-control mb-4" id="exampleInputPassword1" placeholder="Password"  required/>
                    <div className='d-flex justify-content-center'>
                        <input type="submit" className='btn log-in-btn' value='Log In'/>
                    </div>
                </form>
                <div className='log-in-bottom'>
                    <p>Don&apos;t have an account yet? <Link href='/register' className='log-in-link'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    )
}