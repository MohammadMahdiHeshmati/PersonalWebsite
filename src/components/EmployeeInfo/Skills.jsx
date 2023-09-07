import React, { useEffect, useState } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'HTML & CSS',
        uv: 90,
        fill: 'rgba(54,162,235,0.5)',
        stroke: 'rgba(54,162,235,1)'
    },
    {
        name: 'JS',
        uv: 80,
        fill: 'rgba(255,99,132,0.5)',
        stroke: 'rgba(255,99,132,1)'
    },
    {
        name: 'Tailwind',
        uv: 90,
        fill: 'rgba(75,192,192,0.5)',
        stroke: 'rgba(75,192,192,1)'
    },
    {
        name: 'React',
        uv: 70,
        fill: 'rgba(255,159,64,0.5)',
        stroke: 'rgba(255,159,64,1)'
    },
    {
        name: 'NEXT Js',
        uv: 30,
        fill: 'rgba(153,102,255,0.5)',
        stroke: 'rgba(153,102,255,1)'
    },
    {
        name: 'Github',
        uv: 70,
        fill: 'rgba(255,205,86,0.5)',
        stroke: 'rgba(255,205,86,1)'
    },
    {
        name: 'NPM',
        uv: 85,
        fill: 'rgba(201,203,207,0.5)',
        stroke: 'rgba(201,203,207,1)'
    },
];

function Skills() {
    const [browserWidth, setBrowserWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setBrowserWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id='Skills' className='w-full bg-amber-900 dark:bg-neutral-800 border-0 border-b-8 border-amber-950 dark:border-neutral-950 py-10 px-4'>
            <div className='container mx-auto'>
                <div dir='ltr' className='flex flex-col justify-center items-center gap-4'>
                    <h2 className='self-end font-lalezar-regular text-3xl text-amber-950 dark:text-white'>مهارت ها</h2>
                    <ResponsiveContainer className='font-lalezar-regular' width="100%" height="100%" aspect={browserWidth < 640 ? 1 : 2.5}>
                        <BarChart
                            width={200}
                            height={300}
                            data={data}
                            barSize={100}
                        >
                            <CartesianGrid strokeDasharray="10 10" stroke='#6E6066' />
                            {browserWidth < 640 ? (
                                <XAxis angle={-45} textAnchor="end" dataKey="name" />
                            ) : (
                                <XAxis dataKey="name" />
                            )}
                            {browserWidth < 640 ? (null) : (
                                <YAxis domain={[0, 100]} tickFormatter={(tick) => {
                                    return `${tick}%`;
                                }} />
                            )}
                            <Tooltip cursor={{ fill: 'rgba(0,0,0,0.3)' }} />
                            <Legend wrapperStyle={{ fontSize: "1.5rem" }} />
                            <Bar dataKey="uv" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    )
}

export default Skills
