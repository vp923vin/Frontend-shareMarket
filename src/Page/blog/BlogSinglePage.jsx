import React from 'react'
import '../blog/BlogSinglePage.css';
import { Link } from 'react-router-dom';
import { PiUserFill } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import { LiaCommentSolid } from "react-icons/lia";
import { TiEye } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";




function BlogSinglePage() {
    const progressValueA = 90;
    const progressValueB = 80;
    const progressValueC = 70;

    return (
        <>
            <div className="blog-sec-bg" >
                <h1>Fluctuating fortunes of bitcoin</h1>
            </div>
            <section className='blog-singlepage-main-sec'>
                <div className="container">
                    <img width="1230" height="836" src="https://dtdigibit.wpengine.com/wp-content/uploads/2018/01/Blog-2.jpg" class="attachment-full size-full wp-post-image" alt="" decoding="async" fetchpriority="high" sizes="(max-width: 1230px) 100vw, 1230px"></img>

                    <div className='finance-news-btns'>
                        <Link to="/"> Finance </Link>
                        <Link to="/"> News </Link>
                    </div>

                    <div className='sec-2'>
                        <div className='sec-2-div-1'>
                            <div className='icons-details'>
                                <div className='iconss'>
                                    <PiUserFill />
                                </div>
                                <Link to="/"> ram </Link>
                            </div>
                            <div className='icons-details'>
                                <div className='iconss'>
                                    <MdDateRange />
                                </div>
                                <Link to="/"> January 10, 2018 </Link>
                            </div>
                            <div className='icons-details'>
                                <div className='iconss'>
                                    <LiaCommentSolid />
                                </div>
                                <Link to="/"> 0 comments </Link>
                            </div>
                        </div>
                        <div className='sec-2-div-2'>
                            <div className='icons-details'>
                                <div className='iconss'>
                                    <TiEye />
                                </div>
                                <Link to="/"> 1775 views </Link>
                            </div>
                            <div className='icons-details'>
                                <div className='iconss'>
                                    <FaRegHeart />
                                </div>
                                <Link to="/"> 3 likes </Link>
                            </div>
                        </div>
                        
                    </div>

                    <div className='mt-4 blog-single-txt'>
                        <p> <strong> <span>A</span> </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh a leo. Donec efficitur velit ac nisi rutrum, eu ornare augue tristique. Vivamus accumsan nisl id massa finibus aliquet. Pellentesque blandit ut urna dignissim pulvinar. Aliquam in ultrices ante. Nam condimentum eleifend consectetur. Fusce quam nunc, bibendum eget venenatis a, volutpat at ligula. Ut interdum elit vel ante tincidunt mattis. Aenean dignissim vulputate justo, sed tincidunt sapien laoreet a. Fusce vehicula, turpis sed hendrerit gravida, ante justo accumsan nisi, non congue metus risus a lorem.</p>
                        <p>Quisque eleifend velit id metus ullamcorper tristique. Integer vel commodo ex. Pellentesque sed ultrices tellus. Integer lobortis et lorem vitae ullamcorper Tempus interdum ligula proin aptent ornare eu Pede, dignissim lacinia odio arcu augue platea habitant nibh lectus. Platea nostra. Aliquam posuere fringilla aptent quisque consectetuer. Bibendum et amet. Nisl. Luctus. Eros malesuada facilisis</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className='purus_txtList'>
                                <h1>Neque accumsan mi quam placerat purus</h1>
                                <ol type="1">
                                    <li>1. Ligula phasellus mauris hymenaeos</li>
                                    <li>2. Felis ridiculus gravida nulla maecenas.</li>
                                    <li>3. Sit libero penatibus pellentesque volutpat</li>
                                    <li>4. Habitant arcu venenatis diam.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-md-6 blog_sec_progessBar">
                            <h1>Lobortis rutrum amet enim</h1>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${progressValueA}%` }}
                                    aria-valuenow={progressValueA}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >Developement 90%</div>
                            </div>
                            <div className="progress mt-3">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${progressValueB}%` }}
                                    aria-valuenow={progressValueB}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >Design 80%</div>
                            </div>
                            <div className="progress mt-3">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${progressValueC}%` }}
                                    aria-valuenow={progressValueC}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >Marketing 70%</div>
                            </div>
                        </div>
                    </div>

                    <div className='sec-4'>
                        <p>Tempus interdum ligula proin aptent ornare eu Pede, dignissim lacinia odio arcu augue platea habitant nibh lectus. Platea nostra. Aliquam posuere fringilla aptent quisque consectetuer. Bibendum et amet. Nisl. Luctus. Eros malesuada facilisis. Porttitor magnis inceptos mi ad imperdiet varius commodo quam nam fames dictumst feugiat platea mus mollis id id fames id dictum quis aptent eros rutrum sociis libero luctus neque natoque fermentum conubia. Nascetur nulla sodales.</p>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4 mb-4">
                            <Link to="/">
                                <img src="https://dtdigibit.wpengine.com/wp-content/uploads/2018/01/Blog-2-1024x696.jpg" class="vc_gitem-zone-img" alt="Blog-2"></img>
                            </Link>
                        </div>
                        <div className="col-md-4 mb-4">
                            <Link to="/">
                                <img src="https://dtdigibit.wpengine.com/wp-content/uploads/2018/01/Blog1-1024x696.jpg" class="vc_gitem-zone-img" alt="Blog1"></img>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to="/">
                                <img src="https://dtdigibit.wpengine.com/wp-content/uploads/2018/01/Blog-3-1024x696.jpg" class="vc_gitem-zone-img" alt="Blog-3"></img>
                            </Link>
                        </div>
                    </div>

                    <div className='sec-5'>
                        <p className='sec-5-p1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh a leo. Donec efficitur velit ac nisi rutrum, eu ornare augue tristique. Vivamus accumsan nisl id massa finibus aliquet. Pellentesque blandit ut urna dignissim pulvinar. Aliquam in ultrices ante. Nam condimentum eleifend consectetur. Fusce quam nunc, bibendum eget venenatis a, volutpat at ligula. Ut interdum elit vel ante tincidunt mattis. Aenean dignissim vulputate justo, sed tincidunt sapien laoreet a. Fusce vehicula, turpis sed hendrerit gravida, ante justo accumsan nisi, non congue metus risus a lorem.
                        </p>

                        <p className='sec-5-p2'>
                            Quisque eleifend velit id metus ullamcorper tristique. Integer vel commodo ex. Pellentesque sed ultrices tellus. Integer lobortis et lorem vitae ullamcorper Tempus interdum ligula proin aptent ornare eu Pede, dignissim lacinia odio arcu augue platea habitant nibh lectus. Platea nostra. Aliquam posuere fringilla aptent quisque consectetuer. Bibendum et amet. Nisl. Luctus. Eros malesuada facilisis
                        </p>

                        <p className='sec-5-p3'>
                            Montes dapibus cras nulla tortor taciti pede suspendisse vel consectetuer nascetur non lorem tempus tempus lacinia odio, netus cursus, nunc mi ipsum volutpat ad mus ullamcorper id neque conubia cras praesent suspendisse hac, senectus lorem curabitur. Dictum etorta aliquam integer lobortis augue. Nisi orci habitant orci risus.
                        </p>
                    </div>

                    <div className="row signUp-row mt-5">
                        <div className="col-12">
                            <p>Sign-up to get the latest offers and news and stay updated.</p>
                            <p>Note: We do not spam</p>
                        </div>
                        <div className='col-12'>
                            <form className='mt-4'>
                                <input type='email' placeholder='Your Email Address'></input>
                                <button>Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default BlogSinglePage