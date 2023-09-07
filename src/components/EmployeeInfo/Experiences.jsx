import React, { useEffect, useState } from 'react'

function Experiences() {
    const [englishSkill, setEnglishSkill] = useState(20);
    const [teamWorkSkill, setTeamWork] = useState(60);
    const [answerQuestionSkill, setAnswerQuestion] = useState(70);

    const [englishSkillProgress, setEnglishSkillProgress] = useState(0);
    const [teamWorkSkillProgress, setTeamWorSkillkProgress] = useState(0);
    const [answerQuestionSkillProgress, setAnswerQuestionSkillProgress] = useState(0);

    let speed = 50

    useEffect(() => {
        const interval = setInterval(() => {
            if (englishSkillProgress < englishSkill) {
                setEnglishSkillProgress(englishSkillProgress + 1)
            } else {
                clearInterval(interval)
            }
        }, speed)
        return () => clearInterval(interval)
    }, [englishSkillProgress])

    useEffect(() => {
        const interval = setInterval(() => {
            if (teamWorkSkillProgress < teamWorkSkill) {
                setTeamWorSkillkProgress(teamWorkSkillProgress + 1)
            } else {
                clearInterval(interval)
            }
        }, speed)
        return () => clearInterval(interval)
    }, [teamWorkSkillProgress])

    useEffect(() => {
        const interval = setInterval(() => {
            if (answerQuestionSkillProgress < answerQuestionSkill) {
                setAnswerQuestionSkillProgress(answerQuestionSkillProgress + 1)
            } else {
                clearInterval(interval)
            }
        }, speed)
        return () => clearInterval(interval)
    }, [answerQuestionSkillProgress])

    return (
        <section id='Experiences' className='w-full bg-yellow-900 dark:bg-stone-900/95 border-0 border-b-8 border-yellow-950 dark:border-stone-950 py-10 px-4'>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center items-start gap-8'>
                    <h2 className='relative self-start font-lalezar-regular text-3xl text-amber-950 dark:text-white'>مهارت های نرم</h2>

                    <div className='w-full flex flex-wrap xl:flex-nowrap justify-center items-center gap-8 md:gap-20 font-lalezar-regular'>
                        <div className="flex w-full max-w-[300px] p-8 rounded-lg bg-white/10 gap-8 flex-col items-center">
                            <div className="circular-progress" style={{ background: `conic-gradient(#7d2ae8 ${englishSkillProgress * 3.6}deg, #ededed 0deg)` }}>
                                <span className="relative text-4xl font-semibold text-purple-700">{englishSkillProgress}%</span>
                            </div>
                            <span className="text-2xl font-medium text-purple-950 dark:text-white">زبان انگلیسی</span>
                        </div>
                        <div className="flex w-full max-w-[300px] p-8 rounded-lg bg-white/10 gap-8 flex-col items-center">
                            <div className="circular-progress" style={{ background: `conic-gradient(#7d2ae8 ${teamWorkSkillProgress * 3.6}deg, #ededed 0deg)` }}>
                                <span className="relative text-4xl font-semibold text-purple-700">{teamWorkSkillProgress}%</span>
                            </div>
                            <span className="text-2xl font-medium text-purple-950 dark:text-white">مهارت های تیمی</span>
                        </div>
                        <div className="flex w-full max-w-[300px] p-8 rounded-lg bg-white/10 gap-8 flex-col items-center">
                            <div className="circular-progress" style={{ background: `conic-gradient(#7d2ae8 ${answerQuestionSkillProgress * 3.6}deg, #ededed 0deg)` }}>
                                <span className="relative text-4xl font-semibold text-purple-700">{answerQuestionSkillProgress}%</span>
                            </div>
                            <span className="text-2xl font-medium text-purple-950 dark:text-white">پاسخ به سوالات</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Experiences
