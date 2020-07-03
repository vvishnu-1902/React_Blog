import React from 'react'
import { Link } from 'react-router-dom';

const PostDesc = () => {
    return (
        <>
            <div className="title-single-post">
                <Link className="text-link" to="#">Lifestyle</Link>
                <h1>Vivamus vestibulum ntulla necante.</h1>
                <ul className="post-tags">
                    <li>1 week ago</li>
                    <li><Link to="#">3 comments</Link></li>
                </ul>
            </div>
            <div className="single-post-content">
                <img src="upload/single/4.jpg" alt="" />
                <div className="post-content">
                    <div className="post-social">
                        <span>Share</span>
                        <ul className="share-post">
                            <li><Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#" className="pinterest"><i className="fa fa-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="post-content-text">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula <Link to="#">sollicitudin laoreet viverra</Link>, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
                        <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent <Link to="#">elementum hendrerit </Link> tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                        <blockquote>
                            “ Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. ”
                        </blockquote>
                        <p>Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu <Link to="#">pulvinar nunc sapien</Link> ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                        <h3>Nulla vitae mauris non felis mollis faucibus.</h3>
                        <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, <Link to="#">adipiscing varius </Link>, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
                        <div className="image-alt-box">
                            <div className="image-holder">
                                <img src="upload/single/2.jpg" alt="" />
                                <span>Nulla sed leo.</span>
                            </div>
                            <div className="image-holder">
                                <img src="upload/single/3.jpg" alt="" />
                                <span>Fusce lacinia arcu et nulla.</span>
                            </div>
                        </div>
                        <p>Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>

                        <p>Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullam
                        corper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra 
                        malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.</p>
                        <div className="share-tags-box">
                            <ul className="tags">
                                <li><Link to="#">travel</Link></li>
                                <li><Link to="#">adventure</Link></li>
                                <li><Link to="#">lifestyle</Link></li>
                            </ul>
                            <ul className="shares-likes">
                                <li><Link to="#" className="likes">Like <i className="fa fa-heart-o"></i> 14</Link></li>
                                <li><Link to="#" className="facebook"><i className="fa fa-facebook"></i> 23</Link></li>
                                <li><Link to="#" className="twitter"><i className="fa fa-twitter"></i> 5</Link></li>
                                <li><Link to="#" className="pinterest"><i className="fa fa-pinterest"></i> 2</Link></li>
                            </ul>
                        </div>
                    </div>	
                </div>
                <div className="prev-next-box">
                    <div className="prev-box">
                        <Link className="text-link" to="single-post.html"><i className="fa fa-angle-left"></i> Previous Post</Link>
                        <h2><Link to="single-post.html">Sed adipiscing ornare risus.</Link></h2>
                    </div>
                    <div className="next-box">
                        <Link className="text-link next-link" to="single-post.html">Next Post <i className="fa fa-angle-right"></i></Link>
                        <h2><Link to="single-post.html">Quisque a lectus.</Link></h2>
                    </div>
                </div>
                <div className="related-box">
                    <h2>Related Posts</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="news-post standard-post text-left">
                                <div className="image-holder">
                                    <Link to="single-post.html"><img src="upload/blog/p1.jpg" alt="" /></Link>
                                </div>
                                <Link className="text-link" to="#">Food</Link>
                                <h2><Link to="single-post.html">Fusce pellentesque suscipit.</Link></h2>
                                <ul className="post-tags">
                                    <li>by <Link to="#">Stan Enemy</Link></li>
                                    <li>3 days ago</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="news-post standard-post text-left">
                                <div className="image-holder">
                                    <Link to="single-post.html"><img src="upload/blog/p2.jpg" alt="" /></Link>
                                </div>
                                <Link className="text-link" to="#">Lifestyle</Link>
                                <h2><Link to="single-post.html">Quisque a lectus. </Link></h2>
                                <ul className="post-tags">
                                    <li>by <Link to="#">Stan Enemy</Link></li>
                                    <li>3 days ago</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="news-post standard-post text-left">
                                <div className="image-holder">
                                    <Link to="single-post.html"><img src="upload/blog/p3.jpg" alt="" /></Link>
                                </div>
                                <Link className="text-link" to="#">Travel</Link>
                                <h2><Link to="single-post.html">Vestibulum commodo tortor.</Link></h2>
                                <ul className="post-tags">
                                    <li>by <Link to="#">Stan Enemy</Link></li>
                                    <li>3 days ago</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDesc