import React from 'react'
import '../Page/Dashboard.css'
import TradingViewChart from '../components/Chartview'
import Header from '../components/Header'
import Progressbar from '../components/Progressbar'
import { useContextApi } from '../components/context/UseContext'

function Dashboard() {
    const { theme } = useContextApi()
    return (

        <>

            <Header />

            <section className={`first_dash_page ${theme}`}>
                <div className="container_fluid">
                    <div className="row m-0">
                        <div className="col-6">
                            <TradingViewChart />
                        </div>
                        <div className="col-6 sec_col">
                            <div className="row m-0">
                                <div className="col-5">
                                    <img className="candle_img" src="./images/chart-candle.png" alt="" />
                                </div>
                                <div className="col-7 news">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                    <p>Velit quis enim omnis ut eaque veniam illum doloribus obcaecati saepe culpa?</p>
                                    <p>Velit quis enim omnis ut eaque veniam illum doloribus obcaecati saepe culpa?</p>
                                    <p>Velit quis enim omnis ut eaque veniam illum doloribus obcaecati saepe culpa?</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row m-0 py-4">
                        <div className="col-6">
                            <img className="img-fluid" src="./images/tradchart_img.png" alt="" />
                        </div>
                        <div className="col-6">
                            <Progressbar />

                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Dashboard