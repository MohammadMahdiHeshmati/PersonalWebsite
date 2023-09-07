import React from 'react'
import notFoundPic from '../assets/notFound.png'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className='w-full h-screen bg-white p-4 relative flex justify-center items-center'>
            <div className='container mx-auto flex justify-center items-center'>
                <img className='w-full object-cover md:w-[75%]' src={notFoundPic} alt="Not Found Picture" />
            </div>
            <Link to='/' className='font-lalezar-regular absolute bottom-10 rounded-lg bg-purple-800 hover:bg-purple-700 transition-all text-bg-purple-950 px-8 py-3 flex justify-center items-center'>
                بازگشت به خانه
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </Link>
        </section>
    )
}

export default NotFound
