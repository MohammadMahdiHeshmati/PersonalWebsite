import React from 'react'
import twitterLogo from '../../assets/icons8-twitter-squared-100.png'
import telegramLogo from '../../assets/icons8-telegram-100.png'
import linkedinLogo from '../../assets/icons8-linkedin-100.png'
import instagramLogo from '../../assets/icons8-instagram-100.png'
import githubLogo from '../../assets/icons8-github-100.png'
import gmailLogo from '../../assets/icons8-gmail-100.png'

function ContactDeveloper() {
    return (
        <section id='ContactDeveloper' className='w-full bg-lime-900 dark:bg-neutral-900 dark:bg--900 border-0 border-b-8 border-lime-950 dark:border-neutral-950 py-10 px-4' >
            <div className='container mx-auto'>
                <h2 className='self-start font-lalezar-regular text-3xl mb-2 text-lime-950 dark:text-white'>ارتباط با برنامه نویس</h2>

                <div className='grid grid-cols-3 md:grid-cols-6 gap-y-4 p-4 overflow-hidden'>
                    <a href='#' className='mx-auto group hover:z-[15] inline-block z-10 w-24 h-24 after:rounded-xl relative after:top-0 after:absolute after:inline-block after:content-[""] after:bg-lime-950 dark:after:bg-white/10 dark:after:border-white/20 after:border-lime-800 after:border-2 after:w-24 after:h-24 hover:after:rotate-45 after:transition-all'>
                        <img className='group-hover:contrast-150 transition-all duration-500 absolute z-[19] w-full h-full aspect-square object-cover' src={gmailLogo} alt="Gmail Logo" />
                    </a>
                    <a href='#' className='mx-auto group hover:z-[15] inline-block z-10 w-24 h-24 after:rounded-xl relative after:top-0 after:absolute after:inline-block after:content-[""] after:bg-lime-950 dark:after:bg-white/10 dark:after:border-white/20 after:border-lime-800 after:border-2 after:w-24 after:h-24 hover:after:rotate-45 after:transition-all'>
                        <img className='group-hover:contrast-150 transition-all duration-500 absolute z-[19] w-full h-full aspect-square object-cover' src={twitterLogo} alt="Twitter Logo" />
                    </a>
                    <a href='#' className='mx-auto group hover:z-[15] inline-block z-10 w-24 h-24 after:rounded-xl relative after:top-0 after:absolute after:inline-block after:content-[""] after:bg-lime-950 dark:after:bg-white/10 dark:after:border-white/20 after:border-lime-800 after:border-2 after:w-24 after:h-24 hover:after:rotate-45 after:transition-all'>
                        <img className='group-hover:contrast-150 transition-all duration-500 absolute z-[19] w-full h-full aspect-square object-cover' src={instagramLogo} alt="Instagram Logo" />
                    </a>
                    <a href='#' className='mx-auto group hover:z-[15] inline-block z-10 w-24 h-24 after:rounded-xl relative after:top-0 after:absolute after:inline-block after:content-[""] after:bg-lime-950 dark:after:bg-white/10 dark:after:border-white/20 after:border-lime-800 after:border-2 after:w-24 after:h-24 hover:after:rotate-45 after:transition-all'>
                        <img className='group-hover:contrast-150 transition-all duration-500 absolute z-[19] w-full h-full aspect-square object-cover' src={telegramLogo} alt="Telegram Logo" />
                    </a>
                    <a href='#' className='mx-auto group hover:z-[15] inline-block z-10 w-24 h-24 after:rounded-xl relative after:top-0 after:absolute after:inline-block after:content-[""] after:bg-lime-950 dark:after:bg-white/10 dark:after:border-white/20 after:border-lime-800 after:border-2 after:w-24 after:h-24 hover:after:rotate-45 after:transition-all'>
                        <img className='group-hover:contrast-150 transition-all duration-500 absolute z-[19] w-full h-full aspect-square object-cover' src={linkedinLogo} alt="Linkedin Logo" />
                    </a>
                    <a href='#' className='mx-auto group hover:z-[15] inline-block z-10 w-24 h-24 after:rounded-xl relative after:top-0 after:absolute after:inline-block after:content-[""] after:bg-lime-950 dark:after:bg-white/10 dark:after:border-white/20 after:border-lime-800 after:border-2 after:w-24 after:h-24 hover:after:rotate-45 after:transition-all'>
                        <img className='group-hover:contrast-150 transition-all duration-500 absolute z-[19] w-full h-full aspect-square object-cover' src={githubLogo} alt="Github Logo" />
                    </a>
                </div>
            </div>
        </section >

    )
}

export default ContactDeveloper
