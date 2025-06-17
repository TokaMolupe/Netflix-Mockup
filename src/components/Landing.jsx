import React from 'react';

function LandingPage() {
    return (
        <div className='text-red-600 p-10'>
            <div>
                <h1 className='text-5xl text-center'>Streamflix</h1>
            </div>
            <div className='flex flex-wrap md:flex-nowrap justify-center gap-6 px-4 mt-20'>
                <a href="#" className='w-1/3 p-12 md:p-16 bg-skyBlue bg-emerald-600 hover:bg-emerald-400 rounded-lg text-center'></a>
                <a href="#" className='w-1/3 p-12 md:p-16 bg-skyBlue bg-green-700 hover:bg-green-500 rounded-lg text-center'></a>
                <a href="#" className='w-1/3 p-12 md:p-16 bg-skyBlue bg-lime-600 hover:bg-lime-400 rounded-lg text-center'></a>
                <a href="#" className='w-1/3 p-12 md:p-16 bg-skyBlue bg-violet-700 hover:bg-violet-500 rounded-lg text-center'></a>
                <a href="#" className='w-1/3 p-12 md:p-16 bg-skyBlue bg-pink-600 hover:bg-pink-400 rounded-lg text-center'></a>
            </div>
            <div className='flex justify-center mt-10 md:mt-20'>
                <a href="#" className='border-2 rounded-md border-gray-600 hover:scale-105 text-white p-3 md:p-6'>Manage Profile</a>
            </div>
        </div>
    );
}

export default LandingPage;
