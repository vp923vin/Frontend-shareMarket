import React from "react";
import '../Features/Features.css';
import { FaBriefcase } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import FooterNav from '../../components/footer/FooterNav';

function Features() {
    return (
        <>
            <Helmet>
                <title> | Policy</title>
            </Helmet>

            <Header />

            <div className="blog-sec-bg" ></div>
            
            <section className="features-sec-1">
                <div className="row">
                    <div className="col-4">
                        <div className="features-sec-1Box">
                            <div className="dd">
                                <FaBriefcase />

                            </div>
                            <div className="features-sec-1text">
                                <h1>Our Approach</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="features-sec-1Box">
                            <div className="dd">
                                <FaBriefcase />

                            </div>
                            <div className="features-sec-1text">
                                <h1>Our Approach</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="features-sec-1Box">
                            <div className="dd">
                                <FaBriefcase />

                            </div>
                            <div className="features-sec-1text">
                                <h1>Our Approach</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-sec-2">
                <h1>Awesome Style</h1>
                <p>Est At Euismod Ponderum Reformidans. Vivendo Imperdiet Usu Eu, Cum Ea Fabellas Adipisci, Suas Agam Ad Mei. Quo Mollis Euripidis Gloriatur.</p>
                {/* <div className="features-sec-2borderbtm">
                    <p></p>
                </div> */}
            </section>

            <FooterNav/>
        </>
    );
}

export default Features;
