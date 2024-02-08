import React from 'react'

const FooterNav = () => {
    return (
        <>
            <section className='pt-12'>
                <nav className="dark:bg-gray-700">
                    <div className="container py-2 mx-auto">
                        <div className="flex sm:justify-end items-center">
                            <ul className="flex flex-wrap sm:flex-row font-medium mt-0 space-x-4 rtl:space-x-reverse rounded border py-2 px-3 text-sm">
                                <li className="border-r pr-1">
                                    <a href="/policy" className="text-gray-900 dark:text-white " aria-current="page">
                                        Privacy policy
                                    </a>
                                </li>
                                <li className="border-r pr-1">
                                    <a href="/refound" className="text-gray-900 dark:text-white ">
                                        Refund policy
                                    </a>
                                </li>
                                <li className="border-r pr-1">
                                    <a href="#" className="text-gray-900 dark:text-white ">
                                        Disclaimer
                                    </a>
                                </li>
                                <li className="">
                                    <a href="/term" className="text-gray-900 dark:text-white ">
                                        Terms and condition
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <p className='text-white py-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum veritatis eveniet vitae consectetur ex. Nulla debitis velit beatae praesentium delectus doloribus ipsa, voluptatibus nostrum eveniet quibusdam tempore consequuntur totam in!</p>

                    </div>
                  
                 
                </nav>
            </section>
        </>
    )
}

export default FooterNav