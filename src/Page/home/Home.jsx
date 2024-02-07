import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/Banner'
import FooterNav from '../../components/footer/FooterNav'
import PricingCard from '../../components/card/PricingCard'
import Faq from '../../components/Faq'
import TradePatner from '../../components/TradePatner'
import BlogCard from '../../components/features/BlogCard'

const Home = () => {




    return (
        <>
            <Header />

            <div>
                <Banner />



                <TradePatner />


                 <div>
                       <BlogCard/>
                 </div>



                {/* price subscribetion */}

                <section class=" ">
                    <div class="max-w-5xl px-5 py-4 mx-auto  ">
                        <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                            <h2 class="text-sm tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                        </div>
                        <div class=" border-2  border-indigo-500 flex  justify-between items-center px-3  rounded-xl py-3">

                            <div>
                                <p>👑 E-invicing plan 👑 </p>
                            </div>
                            <div>
                                <button className=' text-stone-800 px-3 py-1 rounded-md'>Contact</button>
                                <button className='bg-green-600 text-white px-3 py-1 rounded-md'>Subscribe</button>
                            </div>

                        </div>
                    </div>

                    <div className='text-center flex flex-col justify-center items-center'>
                        <h1 className='text-2xl font-semibold '>New Year offer  </h1>
                        <h1 className='text-2xl font-semibold'>get tree month extra , on all 3 Yeer plans </h1>
                        <p className='text-sm text-green-600 font-normal'>Limited time offer, subscribe now!😊 </p>

                        <ul class=" flex flex-wrap text-sm font-medium text-center py-3 ">
                            <li class="me-2">
                                <a href="#" aria-current="page" class="inline-block p-2  text-blue-600 rounded active  "> Monthly plans</a>
                            </li>
                            <li class="">
                                <a href="#" class="inline-block p-2 rounded bg-gray-700 text-white">Yearly plans</a>
                            </li>

                        </ul>


                    </div>

                </section>

                <PricingCard />


                <div className='pt-20'>
                    <Faq />
                </div>

                <FooterNav />

            </div>
        </>
    )
}



export default Home