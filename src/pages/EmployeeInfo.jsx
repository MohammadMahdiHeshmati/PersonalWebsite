import React, { useEffect, useRef } from 'react'
import Header from '../components/EmployeeInfo/Header';
import About from '../components/EmployeeInfo/About';
import Skills from '../components/EmployeeInfo/Skills';
import Experiences from '../components/EmployeeInfo/Experiences';
import ContactDeveloper from '../components/EmployeeInfo/ContactDeveloper';
import Footer from '../components/EmployeeInfo/Footer';

function EmployeeInfo() {
    const headerElementRef = useRef();
    const scrollToTopRef = useRef();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    useEffect(() => {
        const scrollToTopFunc = () => {
            if (window.scrollY > 500) {
                scrollToTopRef.current.classList.add("translate-y-0")
                scrollToTopRef.current.classList.remove("translate-y-[120px]")
            } else {
                scrollToTopRef.current.classList.add("translate-y-[120px]")
                scrollToTopRef.current.classList.remove("translate-y-0")
            }
        }
        window.addEventListener('scroll', scrollToTopFunc)

        return () => window.removeEventListener('scroll', scrollToTopFunc)
    }, []);

    useEffect(() => {
        var prevScrollPos = window.scrollY;
        const headerFunc = () => {
            var currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                headerElementRef.current.classList.add("header-animation-show")
                headerElementRef.current.classList.remove("header-animation-hide")
            } else {
                headerElementRef.current.classList.add("header-animation-hide")
                headerElementRef.current.classList.remove("header-animation-show")
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', headerFunc)

        return () => window.removeEventListener('scroll', headerFunc)
    }, []);
    return (
        <>
            <button ref={scrollToTopRef} className="fixed bottom-10 left-10 z-50 bg-blue-700 p-2 text-white cursor-pointer transition-all duration-500 rounded-full" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </button>

            <header ref={headerElementRef} className="sticky top-0 z-50 transition-all duration-500">
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
