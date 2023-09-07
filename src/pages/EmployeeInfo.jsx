import React, { useEffect, useState } from 'react'
import Header from '../components/EmployeeInfo/Header';
import About from '../components/EmployeeInfo/About';
import Skills from '../components/EmployeeInfo/Skills';
import Experiences from '../components/EmployeeInfo/Experiences';
import ContactDeveloper from '../components/EmployeeInfo/ContactDeveloper';
import Footer from '../components/EmployeeInfo/Footer';

function EmployeeInfo() {
    const [headerShow, setHeaderShow] = useState('sticky');
    const [scrollToTop, setScrollToTop] = useState(false);
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    }, []);

    useEffect(() => {
        window.onscroll = function (e) {
            if (this.oldScroll > this.scrollY || this.oldScroll < 100) {
                setHeaderShow('header-animation-show')
            } else if (this.oldScroll < this.scrollY) {
                setHeaderShow('header-animation-hide');
            }
            this.oldScroll = this.scrollY;
        }
    }, []);

    return (
        <>
            <button className={`fixed bottom-10 left-10 z-50 bg-blue-700 p-2 text-white cursor-pointer transition-all duration-500 rounded-full ${scrollToTop ? "translate-y-0" : "translate-y-[120px]"}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </button>

            <header className={`sticky top-0 z-50 transition-all duration-500 ${headerShow}`}>
                <Header />
            </header>
            <main>
                <About />
                <Skills />
                <Experiences />
                <ContactDeveloper />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default EmployeeInfo
