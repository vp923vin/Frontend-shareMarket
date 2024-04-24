import React from "react";
import '../Features/Features.css';
import { FaBriefcase } from "react-icons/fa6";

function Features() {
    return (
        <>
            <div className="blog-sec-bg" ></div>
            <section className="sec-1">
                <div className="row">
                    <div className="col-4">
                        <div className="sec-1Box">
                            <div className="dd">
                            <FaBriefcase />                                

                            </div>
                            <div className="sec-1text">
                                <h1>Our Approach</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="sec-1Box">
                            <div className="dd">
                            <FaBriefcase />                                

                            </div>
                            <div className="sec-1text">
                                <h1>Our Approach</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="sec-1Box">
                            <div className="dd">
                            <FaBriefcase />                                

                            </div>
                            <div className="sec-1text">
                                <h1>Our Approach</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a minima ullam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-2"> 
            <h1>Awesome Style</h1>
            <p>Est At Euismod Ponderum Reformidans. Vivendo Imperdiet Usu Eu, Cum Ea Fabellas Adipisci, Suas Agam Ad Mei. Quo Mollis Euripidis Gloriatur.</p>
            <div className="sec-2borderbtm">
                <p></p>
            </div>
            </section>
        </>
    );
}

export default Features;
