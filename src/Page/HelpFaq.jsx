import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

import { MdAddIcCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const HelpFaq = () => {


    const [isOpen, setIsOpen] = useState(null);

    const accordionData = [
        {
            question: 'What is Flowbite?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, earum aperiam. Fugit in eos ex consequuntur! Perspiciatis unde eum tempore aut, ducimus nulla dolorem, aliquam quas officia suscipit mollitia laudantium"

        },
        {
            question: 'Is there a Figma file available?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, earum aperiam. Fugit in eos ex consequuntur! Perspiciatis unde eum tempore aut, ducimus nulla dolorem, aliquam quas officia suscipit mollitia laudantium"

        },
        {
            question: 'What are the differences between ',
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, earum aperiam. Fugit in eos ex consequuntur! Perspiciatis unde eum tempore aut, ducimus nulla dolorem, aliquam quas officia suscipit mollitia laudantium"

        },
        {
            question: 'Online trading’s primary advantages are that it allows?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, earum aperiam. Fugit in eos ex consequuntur! Perspiciatis unde eum tempore aut, ducimus nulla dolorem, aliquam quas officia suscipit mollitia laudantium"

        },
        {
            question: 'Online trading’s primary advantages are that it allows?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, earum aperiam. Fugit in eos ex consequuntur! Perspiciatis unde eum tempore aut, ducimus nulla dolorem, aliquam quas officia suscipit mollitia laudantium"

        },
        {
            question: 'Online trading’s primary advantages are that it allows?',
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, earum aperiam. Fugit in eos ex consequuntur! Perspiciatis unde eum tempore aut, ducimus nulla dolorem, aliquam quas officia suscipit mollitia laudantium"

        },
    ];


    const toggleAccordion = index => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <>
        
            <section className='container py-16'>
                <div className='max-w-xl mx-auto'>
                    <h1 class=" text-[#2d333a] text-center py-3 text-2xl md:text-3xl font-bold leading-tight tracking-tigh">
                        <span className='text-blue-600'>  Frequently Asked Questions</span>
                    </h1>
                    <div class="flex w-32 mt-1 mb-2 overflow-hidden rounded mx-auto md:mb-14">
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

                <div className='grid grid-cols-1 lg:grid-cols-2 py-5 '>
                    <div>
                        {accordionData.map((item, index) => (
                            <div
                                className='border-b'
                                key={index}>
                                <div className='flex justify-between items-center gap-4 ' onClick={() => toggleAccordion(index)}>
                                    <h2 className={`text-lg py-2.5 ${isOpen === index ? "text-green-600" : ""}`}>
                                        <button
                                            type="button"

                                            aria-expanded={isOpen === index ? 'true' : 'false'}
                                            aria-controls={`accordion-body-${index}`}
                                        >
                                            {item.question}

                                        </button>
                                    </h2>

                                    {
                                        isOpen === index ? <FaMinusCircle className={` ${isOpen === index ? "text-green-600" : ""}`} /> : <FaPlus />
                                    }
                                </div>
                                <div
                                    id={`${index}`}
                                    className={` p-2 ${isOpen === index ? '' : 'hidden'}`}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}



                    </div>


                    <div className='py-3'>

                        <h2 className='text-center text-xl py-3 '>You still have  a questions?</h2>
                        <p className='text-center px-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea distinctio, vitae adipisci r cumque!</p>

                        <div className=' py-4 flex flex-col justify-center items-center  sm:flex-row gap-4'>



                            <div className=' w-full sm:w-60  flex flex-col items-center justify-center space-y-3 text-xl sm:h-36 py-4 rounded-lg bg-white text-black'>
                                <button className='py-2 px-2 rounded-full bg-green-900 text-white'>
                                    <MdAddIcCall />
                                </button>
                                <p>7437539544</p>
                                <p className='text-sm'>we are always to help</p>
                            </div>

                            <div className=' w-full sm:w-60  flex flex-col items-center justify-center space-y-3 text-xl sm:h-36 py-4 rounded-lg bg-white text-black'>
                                <button className='py-2 px-2 rounded-full bg-green-900 text-white'>
                                    <MdOutlineMail />
                                </button>
                                <p>Amit@gmail.com</p>
                                <p className='text-sm'>we are always to help</p>
                            </div>

                        </div>


                    </div>


                </div>

            </section>

        </>
    )
}

export default HelpFaq