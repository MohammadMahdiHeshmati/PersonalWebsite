import React from 'react'

function About() {
    return (
        <section id='About' className='w-full bg-orange-900 dark:bg-zinc-900 border-0 border-b-8 border-orange-950 dark:border-zinc-950 py-16'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap justify-center items-center gap-10 p-4'>
                    <div className='border-8 rounded-full overflow-hidden border-white aspect-square w-[250px] md:w-[300px] shadow-2xl'>
                        <img className='w-full h-full object-cover' src="/images/Emp1.jpeg" alt="Organization Profile" />
                    </div>
                    <div className='text-orange-950 dark:text-white max-w-full sm:max-w-[50%] font-lalezar-regular text-center space-y-4'>
                        <div className='flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 mx-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                            <h2 className='text-4xl'>محمد محسین رضایی</h2>
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
