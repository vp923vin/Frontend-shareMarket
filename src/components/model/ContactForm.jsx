import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ContactForm = (props) => {

    return (
        <>


            <Modal
               {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
               
                <Modal.Body>
                    <section class="bg-[#F8F9FA]/100 ">
                        <div class="py-8 px-4 mx-auto max-w-screen-lg">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center  ">Contact Us</h2>
                            <p class="mb-8  font-light text-center   sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                            <form action="#" class="space-y-4">

                                <div className='grid grid-cols-1 sm:grid-cols-2  gap-4'>

                                    <div>
                                        <label for="subject" class="block mb-2 text-sm font-medium  ">First Name</label>
                                        <input type="text"
                                            id="subject"
                                            class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                            placeholder="Your Name" required />
                                    </div>
                                    <div>
                                        <label for="subject" class="block mb-2 text-sm font-medium  ">Last Name</label>
                                        <input type="text" id="subject" class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="  Last Name" required />
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 sm:grid-cols-2  gap-4'>

                                    <div>
                                        <label for="subject" class="block mb-2 text-sm font-medium ">Email</label>
                                        <input type="email" id="subject"
                                            class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  "
                                            placeholder="Example@1.com" required />
                                    </div>

                                    <div>
                                        <label for="subject" class="block mb-2 text-sm font-medium  ">Mobile</label>
                                        <input type="number" id="subject" class="block p-2.5  w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                            placeholder="13459847878" required />
                                    </div>

                                </div>


                                <div class="sm:col-span-2">
                                    <label for="message" class="block mb-2 text-sm font-medium">Your message</label>
                                    <textarea id="message" rows="5" class="block p-2 w-full text-sm  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 " placeholder="Leave a comment..."></textarea>
                                </div>
                                <div className='text-center'>
                                    <button type="submit" class="py-2.5 w-full   text-white px-20 text-sm font-medium text-center  rounded-lg bg-green-700 sm:w-fit hover:bg-green-700 focus:ring-4 focus:outline-none ">Send message</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </Modal.Body>

            </Modal>






        </>
    )
}

export default ContactForm







function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}







