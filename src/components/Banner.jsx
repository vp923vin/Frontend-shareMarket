import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Banner = () => {
    return (
        <>
            <div className='container mx-auto flex flex-col sm:flex-row gap-5 pt-14'>
                <div className='w-full sm:w-3/6'>
                    <p className='text-xl font-semibold'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias corrupti voluptas totam doloremque
                        aperiam repudiandae modi? Vero porro iusto voluptate est. Facere perferendis a, at maxime esse expedita
                        voluptates vitae.


                        
                    </p>
                    <p className='text-xl font-semibold'> <strong>Sign-up</strong> with free demo (

                        <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, soluta similique quisquam nemo provident, quas illum eius  enim recusandae  facilis.</span>)
                    </p>
                </div>

                <div className=' w-full sm:w-2/6 mx-auto text-center '>
                    <div className='bg-gray-700 py-4 px-4'>
                        <h2 className='text-2xl  text-white font-bold py-4'>Welcome</h2>
                        <div className='flex items-center justify-center'>
                            <FcGoogle size={36} className='bg-white py-2 rounded-l-md' />
                            <span className=' px-6 py-2 lg:px-12 md:py-2 capitalize text-white rounded-r-md bg-green-600 text-sm '>Sign with Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
