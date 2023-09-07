import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

function WorkSamples() {
    return (
        <section id='WorkSamples' className='w-full bg-yellow-900 dark:bg-stone-900/95 border-0 border-b-8 border-yellow-950 dark:border-stone-950 py-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0 md:gap-y-10 justify-center items-center p-4 relative overflow-hidden'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="w-full h-[300px] max-w-[200px] md:max-w-[250px] md:h-[350px]"
                    >
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                        <SwiperSlide className='flex items-center justify-start flex-col rounded-2xl font-lalezar-regular overflow-hidden bg-yellow-950 dark:bg-stone-950 text-yellow-900 dark:text-white border border-yellow-700 dark:border-stone-700'>
                            <img className='aspect-square w-full h-[150px] md:h-[200px] object-cover' src="/images/digikalaCover.webp" alt="Web Picture" />
                            <h3 className='text-3xl p-2'>دیجی کالا</h3>
                            <span className='text-2xl text-center'>NEXT JS & Tailwind</span>
                            <a className='bg-yellow-900 dark:bg-stone-900 text-yellow-950 dark:text-white w-max mx-auto px-3 py-1 rounded-lg m-3' href="#">مشاهده</a>
                        </SwiperSlide>
                    </Swiper>
                    <div className='mx-auto flex flex-col justify-center items-center text-yellow-950 dark:text-white'>
                        <div className='flex justify-center items-center'>
                            <h2 className='text-3xl font-lalezar-regular'>نمونه کار ها</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 relative -top-1 mx-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </div>
                        <p className='font-lalezar-regular text-lg mt-2'>پروژه ها و صفحات طراحی شده توسط تیم ما</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                        </svg>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default WorkSamples
