import React from 'react'

const FeatureCardHome = () => {
    return (
        <>
            <section className='py-16'>
                <div className='pb-5 '>
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
                    <p className='text-center'>Hey there! Got questions? We've got answers.
                        Check out our FAQ page for all the deets. Still not satisfied? Hit us up.
                    </p>
                </div>



                <div className=' w-full grid grid-cols-1 sm:grid-cols-2 '>

                    <img
                        className='w-full h-96'
                        src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8fDA%3D"
                        alt="" />

                    <div className='flex items-center'>
                        <div className='md:p-14' >
                            <h1 className='text-4xl text-gray-800 font-medium'>Reduce your carbon footprint</h1>
                            <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem minus maxime odio nobis sint rerum, consequuntur vero molestias, omnis amet aspernatur similique, animi provident ea facere. Ullam, asperiores voluptatibus.</p>
                            <p>Video by <span className='italic underline text-blue-700'>Amit carpenter</span></p>
                            <p className='py-6'>
                                <a href="" className='underline   '>More</a>
                            </p>

                        </div>
                    </div>

                </div>





                <div className='w-full grid grid-cols-1 sm:grid-cols-2'>
                    <div className='bg-gray-800 text-white flex items-center'>
                        <div className='     md:p-14'>
                            <h1 className='text-4xl text-white font-medium'>Reduce your carbon footprint</h1>
                            <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem minus maxime odio nobis sint rerum, consequuntur vero molestias, omnis amet aspernatur similique, animi provident ea facere. Ullam, asperiores voluptatibus.</p>
                            <p>Video by <span className='italic underline text-blue-700'>Amit carpenter</span></p>
                            <p className='py-6'>
                                <a href="" className='underline'>More</a>
                            </p>
                        </div>
                    </div>

                    <iframe 
                    className=' w-full h-96'
                     src="https://www.youtube.com/embed/6STlS125b5k?si=0UdPbK6u6SMYGAhy" 
                     title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
                </div>




            </section>
        </>
    )
}

export default FeatureCardHome