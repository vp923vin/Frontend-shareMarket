import React from 'react'
import { FaGlobeAfrica } from "react-icons/fa";
const ContactPage = () => {

    return (
        <>
            {/* <section class="relative overflow-hidden bg-gray-100">
                <div class="container relative px-4 mx-auto">
                    <div class="px-4 md:text-center ">
                        <p class="mb-2 text-lg font-semibold text-blue-500">
                            Contact Us
                        </p>
                        <h2 class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl ">
                            What we do
                        </h2>
                        <div class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                            <div class="flex-1 h-2 bg-blue-200">
                            </div>
                            <div class="flex-1 h-2 bg-blue-400">
                            </div>
                            <div class="flex-1 h-2 bg-blue-300">
                            </div>
                        </div>

                        <p>Lorem ipsum dol  or sit amet consectetur adipisicing elit. Beatae, qui doloribus atque animi vitae sapiente corporis maiores et laudantium repellendus temporibus eum ipsum quasi, dolorem magnam non voluptas enim molestiae.</p>
                    </div>
                    <div class="max-w-6xl mx-auto">
                        <div class="flex flex-col-reverse py-8 -mx-10 md:-mx-5 lg:flex-row 2xl:py-40">
                            <div class="w-full px-4  lg:w-3/5">
                                <div
                                    class="w-full px-8 py-8 bg-white  border rounded-md shadow-md border-gray-800  lg:ml-20 lg:max-w-lg">
                                    <form action="">
                                        <div class="mb-6">
                                            <h2 class="text-xl font-bold text-gray-00 text-gray-800">
                                                Please send message for futher information! </h2>
                                        </div>
                                        <div class="flex flex-wrap mb-4 -mx-2">
                                            <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                                                <input
                                                    class="w-full px-3 py-2 leading-loose border rounded-md bg-gray-100 text-gray-400 border-gray-700"
                                                    type="text" placeholder="First Name.." required />
                                            </div>
                                            <div class="w-full px-2 lg:w-1/2">
                                                <input
                                                    class="w-full px-3 py-2 leading-loose border rounded-md bg-gray-100 text-gray-400  border-gray-700"
                                                    type="text" placeholder="Last Name.." required />
                                            </div>
                                        </div>
                                        <input
                                            class="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-100 text-gray-400  border-gray-700"
                                            type="email" placeholder="abc@gmail.com" required />
                                        <textarea rows="4" type="message" placeholder="Write a message..." required
                                            class="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-100 placeholder-gray-400 py-7  border-gray-800  "></textarea>
                                        <button
                                            class="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-green-600 rounded-md hover:bg-green-700">
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                            </div>

                            <div class="w-full px-4 mb-8 lg:w-2/5 lg:mb-0">
                                <span class="text-lg font-bold  text-blue-400">Connect with us </span>
                                <h2 class="mt-6 mb-8 text-4xl font-bold md:mb-10 text-gray-700">Lets get connected</h2>
                                <div class="flex items-center mb-6">
                                    <span
                                        class="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="w-5 h-5 text-white bi bi-telephone"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z">
                                            </path>
                                        </svg>
                                    </span>
                                    <p class="text-lg font-semibold text-gray-600">+977-014151678</p>
                                </div>
                                <div class="flex items-center mb-6">
                                    <span
                                        class="flex items-center justify-center w-12 h-12 mr-4  rounded-lg text-gray-400 bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="w-5 h-5 text-gray-400 bi bi-envelope" viewBox="0 0 16 16">
                                            <path
                                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg>
                                    </span>
                                    <p class="text-lg font-semibold  text-gray-600">abc@gmail.com</p>
                                </div>
                                <div class="flex items-center mb-6">
                                    <span
                                        class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4  rounded-lg text-gray-400 bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="w-5 h-5 text-gray-400 bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path
                                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z">
                                            </path>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                                        </svg>
                                    </span>
                                    <div>
                                        <p class="mb-2 text-lg font-semibold  text-gray-600">Kathmandu,Nepal
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.9495847478!2d75.699033217425!3d22.72420499950336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1707716159083!5m2!1sen!2sin"
                                        width="100%" height="400"
                                        style={{ "border": "0" }} allowfullscreen="true"
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">

                                    </iframe>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section> */}


            <section className='container mx-auto  sm:px-6 lg:px-24 py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-[auto_65%] gap-5'>
                    <div>
                        <h1 className='text-2xl font-normal leading-relaxed mb-4 h_wrap '>TollFree Numbers</h1>

                        <div>
                            <ul>
                                <li className='flex items-center border-b pb-1.5 mb-2 '>
                                    <span className='flex items-center text-lg  '> <FaGlobeAfrica className='mr-2' /> United States:</span> <span className='pl-2 '> +91 1234 567 890</span>
                                </li>
                                <li className='flex items-center border-b pb-1.5 mb-2'>
                                    <span className='flex items-center text-lg '> <FaGlobeAfrica className='mr-2' /> India:</span> <span className='pl-2 '> +91 1234 567 890</span>
                                </li>
                                <li className='flex items-center border-b pb-1.5 mb-2'>
                                    <span className='flex items-center text-lg '> <FaGlobeAfrica className='mr-2' /> China:</span> <span className='pl-2 '> +91 1234 567 890</span>
                                </li>
                                <li className='flex items-center border-b pb-1.5 mb-2'>
                                    <span className='flex items-center text-lg '> <FaGlobeAfrica className='mr-2' />  Canada:</span> <span className='pl-2 '> +91 1234 567 890</span>
                                </li>
                                <li className='flex items-center border-b pb-1.5 mb-2'>
                                    <span className='flex items-center text-lg '> <FaGlobeAfrica className='mr-2' /> United States:</span> <span className='pl-2 '> +91 1234 567 890</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className='md:pr-10'>
                        <h1 className='text-2xl font-normal leading-relaxed  mb-4 '>Enquiry Form</h1>


                        <div>
                            <div class=" flex gap-5  w-full mb-4 group">
                                <input type="text"
                                    name="floating_company"
                                    id="floating_company"
                                    class="block py-2.5 px-1 w-full text-lg  bg-transparent border-b outline-none  border-gray-500  "
                                    placeholder="First name* "
                                    required />


                                <input type="text"
                                    name="floating_company"
                                    id="floating_company"
                                    class="block py-2.5 px-1 w-full text-lg  bg-transparent  border-b outline-none  border-gray-500 "
                                    placeholder="Last Name* "

                                    required />
                            </div>
                            <div class=" flex gap-5  w-full mb-3 group">
                                <input type="text"
                                    name="floating_company"
                                    id="floating_company"
                                    class="block py-2.5 px-1 w-full text-lg  bg-transparent border-b outline-none  border-gray-500  "
                                    placeholder="Email* "

                                    required />


                                <input type="text"
                                    name="floating_company"
                                    id="floating_company"
                                    class="block py-2.5 px-1 w-full text-lg  bg-transparent  border-b outline-none  border-gray-500 "
                                    placeholder="Phone"

                                    required />
                            </div>



                            <div>

                                <textarea

                                    rows="3"
                                    class="block p-2.5 w-full text-lg 
                                      outline-none  border-b  border-gray-500"
                                    placeholder="Message...">
                                </textarea>

                            </div>
                        </div>

                        <button className='px-4 py-2.5 rounded-sm mt-4 bg-green-500 text-white '>Send Massage</button>

                    </div>
                </div>



                <div className='my-5'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7360.688444351851!2d75.87430490000001!3d22.71544370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712659047940!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{"border":"0"}}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </section>



        </>
    )
}

export default ContactPage