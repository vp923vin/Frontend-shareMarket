import React from 'react'
import '../about/About.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import FooterNav from '../../components/footer/FooterNav';

// import Card from './Card';

// const Card = ({ title, description, imageUrl }) => {
//     return (
//         <div className="card">
//             <img src={imageUrl} alt={title} />
//             <div className="card-body">
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//             </div>
//         </div>
//     );
// };


const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", width: 40, height: 20, textAlign: "center" }}
            onClick={onClick}
        />
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", width: 40, height: 20, textAlign: "center" }}
            onClick={onClick}
        />
    );
};

const AboutPage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />, // Use the custom previous arrow component
        nextArrow: <NextArrow /> // Use the custom next arrow component
    };

    return (
        <>
        <Helmet>
                <title> | About Us</title>
            </Helmet>

              <Header/>

            <div className="blog-sec-bg" >
                <h1>About Us</h1>
            </div>
            <section className='about-sec-1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 about-sec-1-col1 mb-4">
                            <h1>About Bit<span>Coin</span> </h1>
                            <p> Lorem ipsum dolor sit amet, ac donec hendrerit mi, fermentum ultricies, pellentesque harum luctus ut varius. Maecenas lacust ipsum mi.</p>
                            <ul>
                                <li>you can exchange your bitcoin by eth.</li>
                                <li>best profite bitco.exge for all over the world.</li>
                                <li>we take a big missoin for growth business.</li>
                                <li>we have top lavel bitcoin experts</li>
                            </ul>
                            <button>Read More</button>
                        </div>
                        <div className="col-md-6 mb-4">
                            <img src="images/bitcoin-about-banner.jpg" alt="photo-md" class="img-shadow"></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about-sec-2'>
                <div className="container">
                    <div className='row about-sec-2-hed'>
                        <div className="col-12">
                            <h1>WHY CHOOSE US</h1>
                        </div>
                        <div className="col-lg-6">
                            <p>Sed ut perspi ciatis unde omnis iste natus error sit volup tatem accusa ntium dolor emque lauda ntium, totam rem aperiam</p>

                        </div>
                    </div>
                    <div className="row about-sec-2-row">
                        <div className="col-lg-4 about-sec-2-col">
                            <div className='about-sec-2-imgLogo'>
                                <img src="images/box-icon-f.png" alt="photo-md"></img>
                            </div>
                            <h1>Payment Options</h1>
                            <p>Morbi eget varius risus, ut venenatis libero pellentesque in porta dui.</p>
                        </div>
                        <div className="col-lg-4 about-sec-2-col">
                            <div className='about-sec-2-imgLogo'>
                                <img src="images/box-icon-g.png" alt="photo-md"></img>
                            </div>
                            <h1>Strong Security</h1>
                            <p>Morbi eget varius risus, ut venenatis libero pellentesque in porta dui.</p>
                        </div>
                        <div className="col-lg-4 about-sec-2-col">
                            <div className='about-sec-2-imgLogo'>
                                <img src="images/box-icon-h.png" alt="photo-md"></img>
                            </div>
                            <h1>Words Coverage</h1>
                            <p>Morbi eget varius risus, ut venenatis libero pellentesque in porta dui.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='about-sec-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 slider-navigation mb-5">
                            <Slider {...settings}>
                                <div>
                                    <img src="https://dtdigibit.wpengine.com/wp-content/uploads/2018/02/video-01-min.jpg" alt="video-01-min" />
                                </div>
                                <div>
                                    <img src="https://dtdigibit.wpengine.com/wp-content/uploads/2018/02/video-02-min.jpg" alt="video-02-min" />
                                </div>
                                <div>
                                    <img src="https://dtdigibit.wpengine.com/wp-content/uploads/2018/02/video-02-min.jpg" alt="video-02-min" />
                                </div>
                                <div>
                                    <img src="https://dtdigibit.wpengine.com/wp-content/uploads/2018/02/video-02-min.jpg" alt="video-02-min" />
                                </div>
                            </Slider>
                        </div>
                        <div className="col-md-6 about-sec-3-col2 mb-4">
                            <h2>BitCoin offers Innovation</h2>
                            <h1>PIONEERING MONEY CHANGERS</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl porttitor, eleifend tortor sed, auctor libero. Proin quis purus eu mi fermentum blandit. Nam eget nisi ipsum. Nullam vitae</p>
                            <p>nunc ac eros laoreet egestas pellentesque eget augue. Mauris posuere, diam ut pharetra semper, neque lorem hendrerit arcu, at malesuada lorem nisl et neque.</p>
                            <button>Get started with Bitcoin</button>
                        </div>
                    </div>
                </div>
            </section>

            <FooterNav/>

        </>
    )
}

export default AboutPage