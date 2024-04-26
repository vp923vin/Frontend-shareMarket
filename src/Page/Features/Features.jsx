import React from "react";
import '../Features/Features.css';
import { FaBriefcase } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import FooterNav from '../../components/footer/FooterNav';

 // Function to update countup numbers
 function updateCountups() {
    var countupElements = document.querySelectorAll('.features-sec-4 h1');
    countupElements.forEach(function(element) {
        // Get the current number
        var currentNumber = parseInt(element.textContent);
        // Update the countup number
        element.textContent = currentNumber + 1;
    });
}

// Call the updateCountups function when the page loads
updateCountups();

// Optionally, you can refresh the countups every second
setInterval(updateCountups, 1000);
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

            <section className="features-sec-3">
                <h1 className="features-sec-3-hed">Get your free consulting</h1>
                <p className="features-sec-3-hed-p">We have the best experts to elevate your business to the next level, try is and you will see!</p>
                <p className="features-sec-3Borderbotom"></p>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="features-sec-3COltext">
                                <h1>Great Team</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis rerum, neque est iure laboriosam veritatis accusantium alias architecto aliquid corporis cupiditate saepe illum dolor quas quibusdam adipisci voluptates alias architecto aliquid corporis cupiditate saepe officiis hic.</p>
                            </div>
                            <div className="features-sec-3COltext">
                                <h1>Boost you business</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis rerum, neque est iure laboriosam veritatis accusantium illum dolor quas quibusdam adipisci voluptates alias architecto aliquid corporis cupiditate saepe officiis hic.</p>
                            </div>
                            <div className="features-sec-3COltext">
                                <h1>Data analysis</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis rerum, neque est iure laboriosam veritatis accusantium illum dolor quas quibusdam adipisci voluptates alias architecto.</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src="https://themes.webdevia.com/consulting/wp-content/uploads/2014/08/m7-573x553.jpg" width="573" height="553" alt="m7" title="m7" />
                        </div>
                    </div>
                </div>

            </section>

            <section class="features-sec-4">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3 features-sec-4col1">
                            <h1 id="countup1">250</h1>
                            <p>Staffs across worldwide</p>
                        </div>
                        <div class="col-3 features-sec-4col2">
                            <h1 id="countup2">250</h1>
                            <p>Staffs across worldwide</p>
                        </div>
                        <div class="col-3 features-sec-4col1">
                            <h1 id="countup3">250</h1>
                            <p>Staffs across worldwide</p>
                        </div>
                        <div class="col-3 features-sec-4col2">
                            <h1 id="countup4">250</h1>
                            <p>Staffs across worldwide</p>
                        </div>
                    </div>
                </div>
            </section>

            <FooterNav />
        </>
    );
}

export default Features;
