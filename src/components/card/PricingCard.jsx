import React from 'react';
import { MdOutlineDone } from "react-icons/md";

const PricingCard = () => {
    const cards = [
        {
            id: 1,
            borderColor: 'border-t-green-600',
            buttonText: 'Subscribe to Pro Now',
            buttonColor: 'border-green-600',
            buttonTextColor: "text-green-600"
        },
        { id: 2, borderColor: 'border-t-sky-600', buttonText: 'Subscribe to Pro Now', buttonColor: 'border-sky-600', buttonTextColor: "text-sky-600" },
        { id: 3, borderColor: 'border-t-indigo-500', buttonText: 'Subscribe to Pro Now', buttonColor: 'border-indigo-600', buttonTextColor: "text-indigo-600" },
    ];

    return (
        <>

            <main className='container'>

                <div className='flex gap-4 flex-wrap justify-center'>

                    {cards.map((card) => (
                        <div key={card.id} className={`w-full max-w-sm p-4 border-t-4 ${card.borderColor} rounded-2xl shadow sm:p-8`}>
                            <h5 className="mb-2 text-xl text-center font-semibold text-[#2d333a]">Pro plan</h5>
                            <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur</p>
                            <div className="flex justify-center items-baseline text-gray-900 py-4">
                                <span className="text-3xl font-semibold">$</span>
                                <span className="text-4xl font-extrabold tracking-tight">1149</span>
                                <span className="ms-1 text-xl font-normal text-[#2d333a]">/month</span>
                            </div>

                            <button
                                type="button"
                                className={` border-2  ${card.buttonTextColor} ${card.buttonColor} focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`}
                            >
                                {card.buttonText}
                            </button>

                            <ul role="list" className="space-y-4 my-7 ">
                                <li className="flex">
                                    <MdOutlineDone />
                                    <span className="text-sm font-normal leading-tight text-[#2d333a] ms-3">Everything in free</span>
                                </li>
                                <li className="flex">
                                    <MdOutlineDone />
                                    <span className="text-base font-normal leading-tight text-[#2d333a] ms-3">20GB Cloud storage</span>
                                </li>
                                <li className="flex">
                                    <MdOutlineDone />
                                    <span className="text-base font-normal leading-tight text-[#2d333a] ms-3">20GB Cloud storage</span>
                                </li>
                                <li className="flex">
                                    <MdOutlineDone />
                                    <span className="text-base font-normal leading-tight text-[#2d333a] ms-3">20GB Cloud storage</span>
                                </li>

                            </ul>
                        </div>
                    ))}

                </div>
            </main>
        </>
    );
}

export default PricingCard;
