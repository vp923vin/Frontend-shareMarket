import React from 'react'
import { CiFlag1 } from "react-icons/ci";

import HelpFaq from './HelpFaq';
const Help = () => {
    return (
        <>
            <div className="bg-gray-800 text-white  py-20">
                <div className="container mx-auto">
                    <div className="flex flex-col w-full">
                        <p className="text-3xl md:text-5xl text-center my-4 leading-relaxed md:leading-snug text-blue-600">Hello, How can  we help you!</p>
                    </div>
                    <div class="max-w-5xl mx-auto">

                        <form className=''>
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                    className=" w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-700  placeholder-gray-4  focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search Mockups, Logos..." required />
                                <button type="submit" class="text-white absolute end-2.5 bottom-3 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 bg-green-600 focus:ring-blue-800">Search</button>
                            </div>
                            <p className='text-center my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ullam eum possimus quo
                                ipsum?</p>
                        </form>


                        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 '>
                            <div className='w-full sm:w-40 h-32 flex flex-col justify-center items-center space-y-4 text-xl bg-white shadow-sm rounded-lg border text-gray-900'>
                                <p><CiFlag1 /></p>
                                <p>Get started</p>
                            </div>
                            <div className='w-full sm:w-40 h-32 flex flex-col justify-center items-center space-y-4 text-xl bg-white shadow-sm rounded-lg border text-gray-900'>
                                <p><CiFlag1 /></p>
                                <p>Get started</p>
                            </div>
                            <div className='w-full sm:w-40 h-32 flex flex-col justify-center items-center space-y-4 text-xl bg-white shadow-sm rounded-lg border text-gray-900'>
                                <p><CiFlag1 /></p>
                                <p>Get started</p>
                            </div>
                            <div className='w-full sm:w-40 h-32 flex flex-col justify-center items-center space-y-4 text-xl bg-white shadow-sm rounded-lg border text-gray-900'>
                                <p><CiFlag1 /></p>
                                <p>Get started</p>
                            </div>
                        </div>

                    </div>


                    <div>
                       <HelpFaq/>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Help