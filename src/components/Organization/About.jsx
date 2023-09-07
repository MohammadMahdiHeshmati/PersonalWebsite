import React from 'react'

function About() {
    return (
        <section id='About' className='w-full bg-orange-900 dark:bg-zinc-900 border-0 border-b-8 border-orange-950 dark:border-zinc-950 py-16'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap justify-center items-center gap-10 p-4'>
                    <div className='border-8 rounded-[50px] overflow-hidden border-white aspect-square w-[250px] md:w-[300px] shadow-2xl'>
                        <img className='w-full h-full object-cover' src="/images/WebsiteLogo.jpg" alt="Organization Profile" />
                    </div>
                    <div className='text-orange-950 dark:text-white max-w-full sm:max-w-[50%] font-lalezar-regular text-center space-y-4'>
                        <div className='flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 mx-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>
                            <h2 className='text-4xl'>Clever Boys Qom</h2>
                        </div>
                        <p className='text-lg'>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit. Iste iure eius a nobis recusandae architecto cumque unde rerum dolorum aspernatur.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
