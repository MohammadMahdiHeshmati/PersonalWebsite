import React, { useState } from 'react'
import macbookPic from '../../assets/macbook.png'
import { toast } from 'react-toastify';

function ContactUs({ baseUrlApis }) {
    const [body, setBody] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')

    const sendMessageHandler = async (event) => {
        event.preventDefault();
        if (name.length > 0 && phone.length === 11 && subject.length > 0 && body.length > 0) {
            let newMessage = {
                body,
                name,
                phone,
                subject
            }
            const addMessageApi = await fetch('https://novamusic-f81fd-default-rtdb.firebaseio.com/OrganizationContact.json', {
                method: 'POST',
                body: JSON.stringify(newMessage)
            })
            if (addMessageApi.ok) {
                toast.success("پیام شما ثبت شد، در صورت نیاز با شما تماس خواهیم گرفت!");
                setBody('')
                setName('')
                setPhone('')
                setSubject('')
            } else {
                toast.error("خطا در برقراری ارتباط، لطفا بعدا تلاش کنید!");
            }
        } else {
            toast.error("لطفا اطلاعات صحیح را وارد نمایید!");
        }
    }
    return (
        <section id='ContactUs' className='w-full bg-lime-900 dark:bg-neutral-900 dark:bg--900 border-0 border-b-8 border-lime-950 dark:border-neutral-950 py-5'>
            <div className='container mx-auto'>
                <div className='w-full max-w-[95%] mx-auto relative p-4'>
                    <img className='hidden lg:inline-block relative -left-5 w-full object-cover' src={macbookPic} alt="macbook Picture" />
                    <div className='static lg:absolute top-[19%] w-full flex justify-center items-center gap-10 flex-wrap md:flex-nowrap'>
                        <div className='basis-full md:max-w-[60%] lg:max-w-[35%] xl:max-w-[43%] 2xl:max-w-[47%] md:basis-2/3 grow font-lalezar-regular'>
                            <div className='text-lime-950 dark:text-white dark:lg:text-neutral-950 flex justify-start items-center pb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mx-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                <h2 className='text-3xl'>تماس با ما</h2>
                            </div>
                            <form className='w-full flex flex-col justify-center gap-3' action="#">
                                <input value={name} onChange={(e) => setName(e.target.value)} className='grow p-2 rounded-lg select-text text-black' type="text" placeholder='نام کامل' />
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className='grow p-2 rounded-lg select-text text-black' type="number" min={0} placeholder='تلفن همراه (با صفر)' />
                                <input value={subject} onChange={(e) => setSubject(e.target.value)} className='grow p-2 rounded-lg select-text text-black' type="text" placeholder='موضوع' />
                                <textarea value={body} onChange={(e) => setBody(e.target.value)} className='grow p-2 rounded-lg select-text h-48 lg:h-28 xl:h-48 text-black resize-none' placeholder='توضیحات'></textarea>
                                <button onClick={sendMessageHandler} className='bg-lime-800 dark:bg-neutral-800 self-start text-lime-500 dark:text-white px-6 py-2 rounded-lg'>ارسال پیغام</button>
                            </form>
                        </div>
                        <div className='basis-full md:basis-1/3 max-w-[300px] md:max-w-[250px] grow flex flex-col justify-center items-center bg-lime-950 dark:bg-neutral-900 rounded-lg overflow-hidden shadow-xl border border-lime-800 dark:border-neutral-800'>
                            <img className='aspect-square w-full h-[180px] md:h-[130px] object-cover' src="/images/WebsiteLogo.jpg" alt="Organization Profile" />
                            <div className='font-lalezar-regular text-lime-700 dark:text-white py-4 text-center'>
                                <span className='text-3xl md:text-3xl block pb-4 px-2'>09199854545</span>
                                <span className='text-3xl md:text-2xl block border-0 border-dashed border-y-4 border-lime-800 dark:border-neutral-800 py-4 px-2'>Hi.User@gmil.com</span>
                                <span className='text-2xl md:text-xl block pt-4 px-2'>قم بنیاد میدان جوان دکتر حسابی دفتر مرکزی طبقه ۳ واحد ۱۰</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs