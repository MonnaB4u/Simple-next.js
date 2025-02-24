"use client";

import React from 'react';
import ReactPlayer from 'react-player';
function LandingPage() {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen w-full h-full mb-4">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=dftKArsWaCs"
                    width="100vw"
                    height="100vh"
                    controls
                    playing
                    loop
                    // muted
                />

            </div>

            <div className='p-8 flex flex-col md:flex-row items-center gap-8 md:gap-12'>
                <div className='w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg'>
                    <img
                        src='https://clipart-library.com/images/pT7K76y8c.jpg'
                        alt='Testimonial'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='text-center md:text-left max-w-2xl'>
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>AutolifeTech</h1>
                    <p className='text-lg md:text-xl mt-4 text-gray-700'>
                        "Your home with smart technologies" - Sky Automations
                        Plan a draft with Sky, receive PDFs for concepts tailored for your home.
                    </p>
                    <a
                        href='https://wa.me/your-number'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block mt-6 bg-green-500 text-white px-9 py-2 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-md'
                    >
                     WhatsApp
                    </a>
                </div>
            </div>

            <div className="">


            </div>

        </div>
    )
}

export default LandingPage