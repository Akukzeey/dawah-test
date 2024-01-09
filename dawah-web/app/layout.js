import React from "react";
import '@/styles/globals.scss'
import '@/styles/media-quaries.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopContact from "@/components/TopContact";
import { Work_Sans} from 'next/font/google'
import {Nunito_Sans} from "next/font/google";

const  workSans= Work_Sans({ subsets: ['latin'], weight: ['400', '700'],variable:'--font-work-sans', display: 'swap', adjustFontFallback: false })

const  nunitoSans=Nunito_Sans({ subsets: ['latin'], weight: ['400', '700'],variable:'--font-nunito-sans', display: 'swap', adjustFontFallback: false })

export const metadata = {
    title: 'MN Dawah Academy',
    description: 'MN Dawah Academy | Saint Paul: Excellence in K-12 Education & Islamic Programs',
}

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`${workSans.variable} ${nunitoSans.variable}`}>
        <body>
        <ToastContainer/>
        <TopContact/>
        <Navbar/>
            {children}
        <Footer/>
        </body>
        </html>
    )
}
