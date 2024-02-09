import React from 'react'

const FeatureVideo = () => {

    const arr = [1, 2, 3]
    return (
        <section className='container'>
            <div className='max-w-xl mx-auto pb-5 '>
                <h1 class="  text-center py-3 text-2xl md:text-3xl font-bold leading-tight tracking-tigh">
                    <span className='text-blue-600'> Our Features</span> & Service
                </h1>
                <div class="flex w-32 mt-1 mb-2 overflow-hidden rounded md:mx-auto md:mb-14">
                            <div class="flex-1 h-2 bg-blue-200">
                            </div>
                            <div class="flex-1 h-2 bg-blue-400">
                            </div>
                            <div class="flex-1 h-2 bg-blue-300">
                            </div>
                        </div>

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    arr.map((item) => (
                        <div className="max-w-sm bg-white text-center shadow rounded-2xl overflow-hidden ">
                            <a href="#">
                                <img className="rounded-t-2xl h-60 w-full transform transition duration-300 hover:scale-110"

                                    src="https://png.pngtree.com/png-vector/20201223/ourmid/pngtree-hand-drawn-human-organ-structure-diagram-png-image_2611220.jpg"
                                    alt="" />
                            </a>
                            <div className="p-4">
                                <a href="#">
                                    <h5 className="py-2 text-lg font-bold tracking-tight text-blue-500 ">Communiction</h5>
                                </a>
                                <p className=" pt-2 pb-3 font-normal text-gray-700 ">Here are the biggest  far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex bg-green-600 hover:bg-800 text-white items-center px-6 py-1.5 text-sm  text-center rounded-xl outline-none ">
                                    MORE
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FeatureVideo