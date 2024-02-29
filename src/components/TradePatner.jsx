import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default function TradePatner() {
    const [tradedata, settradedata] = useState([]);

    const getDatatrade = async () => {
        try {
            const response = await axios.get("https://scripts.bulleyetrade.com/api/getMarket");
            settradedata(response.data.Data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getDatatrade();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <div className="container py-16">

                <h2 className="text-[#2d333a] text-center 
                          py-3 text-2xl md:text-3xl font-bold 
                           leading-tight tracking-tigh capitalize">
                    <span className="text-blue-600">Our Trading</span> Partners

                </h2>

                <div class="flex w-32 mt-1 mb-2 overflow-hidden rounded md:mx-auto ">
                    <div class="flex-1 h-2 bg-blue-200">
                    </div>
                    <div class="flex-1 h-2 bg-blue-400">
                    </div>
                    <div class="flex-1 h-2 bg-blue-300">
                    </div>
                </div>
                <div className="">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        infinite={true}
                        itemClass="carousel-item-padding-30-px"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {tradedata.length > 0 &&
                            tradedata.map((trade) => {
                                const profitOrLoss = (trade.low - trade.open).toFixed(2);
                                const isProfit = profitOrLoss >= 0;

                                return (
                                    <div
                                        key={trade.symbol}
                                        className="h-32 "

                                    >
                                        <img src="https://bfsi.eletsonline.com/wp-content/uploads/2017/06/axis-bank.jpg" alt="" />

                                    </div>
                                );
                            })}
                    </Carousel>
                </div>
            </div>
        </>
    );
}
