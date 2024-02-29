import React, { useState } from 'react'

const Accordition = () => {
    const [active, setActive] = useState(null)

    const data = [
        {
            id: 1,
            question: "what is Data type in javascript ",
            ans: "In JavaScript, data types represent the kinds of values that can be used and manipulated in a program. JavaScript is a dynamically-typed language, meaning that variables can hold values of any data type without specifying the data type explicitly There are several primitive data types and one complex data type in JavaScript:"

        }, {
            id: 2,
            question: "what is React js  ",
            ans: "React is a JavaScript library for building user interfaces, particularly for single-page applications (SPAs) where UI changes are frequent and dynamic. Developed and maintained by Facebook, React has gained immense popularity due to its declarative and component-based approach to building UIs."

        }
    ]

    
    const toggleAns = (id) => {
        setActive(active === id ? null : id)
    }


    return (

        <>
            <div className='bg-gray-800 h-screen text-white  flex flex-col items-center justify-center'>
                <h1 className='text-center font-bold text-2xl mb-5'>Accordition</h1>


                <div className='w-1/2'>

                    {
                        data.map((item) => (
                            <>
                                <h2 onClick={() => toggleAns(item.id)}>
                                    <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                        <span>{item.question}</span>
                                        <svg data-accordion-icon class={`w-3 h-3  ${active === item.id ? "" : "rotate-180"} shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6`}>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>

                                <div id="accordion-collapse-body-1" className={`transition-all duration-300 ${active === item.id ? "" : "hidden"} opacity-0 ${active === item.id ? "opacity-100" : ""}`} aria-labelledby="accordion-collapse-heading-1">
                                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">{item.ans}</p>
                                    </div>
                                </div>

                            </>
                        ))
                    }



                </div>
            </div>
        </>

    )
}

export default Accordition