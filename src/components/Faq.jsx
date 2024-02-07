import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
const Faq = () => {


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



            <section className='container'>
                <div className='max-w-xl mx-auto'>
                    <h1 class=" text-[#2d333a] text-center py-3 text-2xl md:text-3xl font-bold leading-tight tracking-tigh">
                       <span className='text-blue-600'>  Frequently Asked</span> Questions
                    </h1>

                    <p className='text-center'>Hey there! Got questions? We've got answers.
                        Check out our FAQ page for all the deets. Still not satisfied? Hit us up.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 py-5 '>
                    <div>
                        {accordionData.map((item, index) => (
                            <div  
                             className='border-b'
                            key={index}>
                                <div className='flex justify-between items-center gap-4 '  onClick={() => toggleAccordion(index)}>
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

                    <div className="hidden sm:block  mx-auto">
                        <img src="images/faq.png" alt="FAQ Image"  />
                    </div>

                </div>

            </section>
        </>
    )
}

export default Faq