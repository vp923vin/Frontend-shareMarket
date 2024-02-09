import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
    return (
        <>
            <section className='py-16'>
                <div className="grid sm:px-10 lg:grid-cols-[60%_auto] lg:px-20 xl:px-10 ">

                    <div className=" mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 ">
                        <p className="text-xl font-medium">Payment Details</p>
                        <p className="text-gray-400">Complete your order by providing your payment details.</p>


                        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 ">
                            <div className="">
                                <label htmlFor="first-name" className="mt-4 mb-2  text-sm font-medium">First name</label>
                                <input type="text"
                                    id=""
                                    name=""
                                    className="w-full rounded-md border border-sky-600 px-4 py-2.5 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-sky-500 focus:ring-sky-500"
                                    placeholder="First name" />
                            </div>

                            <div className="">
                                <label htmlFor="first-name" className="mt-4 mb-2  text-sm font-medium">Last Name</label>
                                <input type="text"
                                    id=""
                                    name=""
                                    className="w-full rounded-md border border-gray-200 px-4 py-2.5 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder=" Last name" />
                            </div>
                        </div>

                        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 ">
                            <div className="">
                                <label htmlFor="mobile" className="mt-2 mb-2  text-sm font-medium">Mobile</label>
                                <input type="number"
                                    id=""
                                    name=""
                                    className="w-full rounded-md border border-sky-600 px-4 py-2.5 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-sky-500 focus:ring-sky-500"
                                    placeholder="Mobile" />
                            </div>

                            <div className="">
                                <label htmlFor="email" className="mt-2 mb-2  text-sm font-medium">Email</label>
                                <input type="text"
                                    id=""
                                    name=""
                                    className="w-full rounded-md border border-gray-200 px-4 py-2.5 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Email" />
                            </div>
                        </div>


                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                            <div>
                                <label htmlFor="first-name" className="mt-2 mb-2  text-sm font-medium">Country</label>
                                <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                    <option value="State">India</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="first-name" className="mt-2 mb-2  text-sm font-medium">State</label>
                                <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                    <option value="State">Goa</option>
                                </select>
                            </div>
                        </div>


                        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 ">
                            <div className="">
                                <label htmlFor="mobile" className="mt-2 mb-2  text-sm font-medium">Billing Address</label>
                                <input type="text"
                                    id=""
                                    name=""
                                    className="w-full rounded-md border border-sky-600 px-4 py-2.5 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-sky-500 focus:ring-sky-500"
                                    placeholder="Billing Address" />
                            </div>

                            <div className="">
                                <label htmlFor="email" className="mt-2 mb-2  text-sm font-medium">Pin</label>
                                <input type="text"
                                    id=""
                                    name=""
                                    className="w-full rounded-md border border-gray-200 px-4 py-2.5 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="pin code" />
                            </div>
                        </div>


                        <div className="">
                            <label htmlFor="address" className="mt-2 mb-2  text-sm font-medium">Address</label>
                            <input type="text"
                                id=""
                                name=""
                                className="w-full rounded-md border border-sky-600 px-4 py-2.5 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-sky-500 focus:ring-sky-500"
                                placeholder="Address" />
                        </div>

                    </div>

                    <div className="px-4 pt-8 bg-gray-800 h-fit text-white ">
                        <div className='flex gap-2 justify-end'>

                            <input type="text"
                                id=""
                                name=""
                                className="rounded-md border text-black border-sky-600 px-4 py-2.5 text-sm shadow-sm outline-none focus:z-10 focus:border-sky-500 focus:ring-sky-500"
                                placeholder="Promo code" />

                            <button className='bg-green-600 text-white text-sm shadow-sm  px-4 py-2.5 rounded-md focus:z-10'>submit</button>
                        </div>

                        <div className="mt-2 space-y-3 rounded-lg border  px-2 py-4 sm:px-6">
                            {/* Total */}
                            <div className=" border-b">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white">Subtotal</p>
                                    <p className="font-semibold text-white ">$399.00</p>

                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white">Shipping</p>
                                    <p className="font-semibold text-white">$8.00</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white">GST</p>
                                    <p className="font-semibold text-white">18%</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-white">Total</p>
                                <p className="text-2xl font-semibold text-white">$408.00</p>
                            </div>
                        </div>


                        <div class="flex items-center py-2">
                            <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600  border-gray-300 rounded focus:ring-blue-500  "/>
                                <label for="checked-checkbox" class="ms-2 text-sm font-medium text-white ">
                                    I read and accept
                                    <Link to="/policy" class="text-blue-600 hover:underline mr-2"> privacy policy</Link>
                                    <Link to="/refound" class="text-blue-600 hover:underline mr-2">refund policy</Link>
                                    <Link to="/disclaimer" class="text-blue-600 hover:underline mr-2">disclaimer</Link>and
                                    <Link to="/term" class="text-blue-600 hover:underline mr-2"> terms and conditions</Link>.
                                </label>
                        </div>

                        <button className="mt-4 mb-8 w-full rounded-md bg-green-600  hover:bg-green-900 px-6 py-3 font-medium text-white">Pay Now</button>




                    </div>

                </div>

            </section>

        </>
    );
};

export default PaymentPage;
