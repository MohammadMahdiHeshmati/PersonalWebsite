import React from 'react'
import { Link } from 'react-router-dom'

function Employee() {
    return (
        <section id='Employee' className='w-full bg-amber-900 dark:bg-neutral-800 border-0 border-b-8 border-amber-950 dark:border-neutral-950 py-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 md:gap-y-10 p-4'>
                    <div className='flex justify-center items-center flex-col gap-4'>
                        <div className='border-[6px] rounded-full overflow-hidden border-white aspect-square w-[200px] md:w-[250px] shadow-2xl'>
                            <img className='w-full h-full object-cover' src="/images/Emp1.jpeg" alt="Employee Profile" />
                        </div>
                        <div className='text-center font-lalezar-regular text-amber-950 dark:text-white flex flex-col'>
                            <h3 className='text-3xl'>محمد رضا حمید زاده</h3>
                            <span className='text-2xl'>فرانت اند دولوپر</span>
                            <Link to={`/employeeInfo/${'MohammadRezaHamidZadeh'}`} className='bg-amber-950 dark:bg-neutral-950 text-amber-900 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3'>اطلاعات بیشتر</Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col gap-4'>
                        <div className='border-[6px] rounded-full overflow-hidden border-white aspect-square w-[200px] md:w-[250px] shadow-2xl'>
                            <img className='w-full h-full object-cover' src="/images/Emp2.jpg" alt="Employee Profile" />
                        </div>
                        <div className='text-center font-lalezar-regular text-amber-950 dark:text-white flex flex-col'>
                            <h3 className='text-3xl'>محمد رضا حمید زاده</h3>
                            <span className='text-2xl'>فرانت اند دولوپر</span>
                            <Link to={`/employeeInfo/${'MohammadRezaHamidZadeh'}`} className='bg-amber-950 dark:bg-neutral-950 text-amber-900 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3'>اطلاعات بیشتر</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Employee
