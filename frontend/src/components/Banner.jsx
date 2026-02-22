import React from 'react'
const Book = '/book.jpg';

export default function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10'>

                <div className='w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0'>
                    <div className='space-y-6'>
                        <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>Welcome — Learn something <span className='text-accent'>new every day</span></h1>

                        <p className='text-lg text-slate-600'>Curated books and courses to help you grow. Practical, focused, and designed for real learning.</p>

                        <div className='flex gap-3 items-center'>
                            <label className="input input-bordered flex items-center gap-2 w-full md:w-2/3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow bg-transparent outline-none" placeholder="Email" />
                            </label>

                            <button className="btn-accent font-medium">Get Started</button>
                        </div>
                    </div>
                </div>

                <div className='order-1 md:order-2 w-full md:w-1/2 flex justify-center'>
                    <div className='w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-2xl glass flex items-center justify-center'>
                        <img src={Book} alt="cover" className='object-cover w-full h-full' />
                    </div>
                </div>
            </div>
        </>
    )
}
