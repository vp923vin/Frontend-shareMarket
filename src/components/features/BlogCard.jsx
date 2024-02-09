import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
const BlogCard = () => {

    const arry = [1, 2, 3]

    return (




        <>

            <section className='container'>

                <div className='max-w-xl mx-auto pb-5 '>
                    <h1 class=" text-[#2d333a] text-center py-3 text-2xl md:text-3xl font-bold leading-tight tracking-tigh">
                        <span className='text-blue-600'>  Latest News</span> & Blog
                    </h1>
                    <div class="flex w-32 mt-1 mb-2 overflow-hidden rounded md:mx-auto md:mb-14">
                            <div class="flex-1 h-2 bg-blue-200">
                            </div>
                            <div class="flex-1 h-2 bg-blue-500">
                            </div>
                            <div class="flex-1 h-2 bg-blue-300">
                            </div>
                        </div>
                    <p className='text-center'>Hey there! Got questions? We've got answers.
                        Check out our FAQ page for all the deets. Still not satisfied? Hit us up.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        arry.map((item) => (
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                                <a href="#">
                                    <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </a>
                                <div className="p-3">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Noteworthy technology acquisitions 2021</h5>
                                    </a>
                                    <p className="mb-2 font-normal ext-gray-700 text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                                    <div className='flex justify-between'>
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-600 outline-none ">
                                            <span className='mr-1'><FaCalendarAlt /></span>
                                            20 Dec
                                        </a>

                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-600 outline-none ">
                                            Read more
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>









        </>
    )
}

export default BlogCard