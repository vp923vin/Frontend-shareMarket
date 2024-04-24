import React from 'react'
import '../WhyUs/WhyUs.css';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import FooterNav from '../../components/footer/FooterNav';


const WhyUs = () => {


    return (
        <>
            <Helmet>
                <title> | WhyUs</title>
            </Helmet>

            <Header />

            <div className="blog-sec-bg" >
                <h1>Why Us</h1>
            </div>

            <sectipn className="whyUsSec-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 whyUsSecCol1">
                            <h1>Why to choose us?</h1>
                            <div className='whyUsSecCol1BottomBorder'></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur animi illo voluptas, dignissimos cumque rerum explicabo nam quasi. Non repellat quam voluptas quas tempore sequi quae accusamus numquam dignissimos?</p>
                        </div>
                        <div className="col-6">
                            <div className='whyUsSecCol2'>
                                <h1>Get your free consulting</h1>
                                <h2>Have an idea, a dream? We can make it happen.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </sectipn>

            <section className='whyUssec-2'>
                <div className="container">
                    <h1 className='whyUssec-2-hed'>Meet Our Team</h1>
                    <div className="row">
                        <div className="col-3 whyUssec-2col1">
                            <img src='https://themes.webdevia.com/consulting/wp-content/uploads/2014/08/Team-2-1.jpg'></img>
                            <div className='whyUssec-2col1-Text'>
                                <h3 class="team-member-name">Aleen Valzac</h3>
                                <h4>CEO</h4>
                            </div>
                        </div>
                        <div className="col-3 whyUssec-2col1">
                            <img src='https://themes.webdevia.com/consulting/wp-content/uploads/2014/08/Team-1.jpg'></img>
                            <div className='whyUssec-2col1-Text'>
                                <h3 class="team-member-name">Aleen Valzac</h3>
                                <h4>CEO</h4>
                            </div>
                        </div>
                        <div className="col-3 whyUssec-2col1">
                            <img src='https://themes.webdevia.com/consulting/wp-content/uploads/2014/08/Team-3.jpg'></img>
                            <div className='whyUssec-2col1-Text'>
                                <h3 class="team-member-name">Aleen Valzac</h3>
                                <h4>CEO</h4>
                            </div>
                        </div>
                        <div className="col-3 whyUssec-2col1">
                            <img src='https://themes.webdevia.com/consulting/wp-content/uploads/2014/08/Team-2-1.jpg'></img>
                            <div className='whyUssec-2col1-Text'>
                                <h3 class="team-member-name">Aleen Valzac</h3>
                                <h4>CEO</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterNav />

        </>
    )
}

export default WhyUs;