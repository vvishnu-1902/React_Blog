import React from 'react';
import { Link } from 'react-router-dom';

const Trending = () =>{
    return(
        <section className="top-home-section">
			<div className="container">
				<div className="title-section text-center">
					<h1>Trending Posts</h1>
				</div>
				<div className="top-home-box">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="news-post image-post">
								<img src="upload/blog/home5/a1.jpg" alt="" />
								<div className="hover-post">
									<Link className="category-link" to="#">Lifestyle</Link>
									<h2><Link to="single-post.html">Praesent placerat quiseros.</Link></h2>
									<ul className="post-tags">
										<li>3 days ago</li>
										<li><Link to="#">2 comments</Link></li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="row">
								<div className="col-md-6">
									<div className="news-post standard-post left-align">
										<div className="image-holder">
											<Link to="single-post.html">
                                                <img src="upload/blog/home2/m2.jpg" alt="" />
                                            </Link>
										</div>
										<Link className="text-link" to="#">Travel</Link>
										<h2><Link to="single-post.html">Vestibulum auctor dapibus.</Link></h2>
										<ul className="post-tags">
											<li>by <Link to="#">Stan Enemy</Link></li>
											<li>3 days ago</li>
										</ul>
									</div>
								</div>
								<div className="col-md-6">
									<div className="news-post standard-post left-align">
										<div className="image-holder">
											<Link to="single-post.html">
                                                <img src="upload/blog/home2/m3.jpg" alt="" />
                                            </Link>
										</div>
										<Link className="text-link" to="#">Travel</Link>
										<h2><Link to="single-post.html">Praesent placerat risus.</Link></h2>
										<ul className="post-tags">
											<li>by <Link to="#">Stan Enemy</Link></li>
											<li>3 days ago</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="news-post standard-post left-align">
										<div className="image-holder">
											<Link to="single-post.html">
                                                <img src="upload/blog/home2/m6.jpg" alt="" />
                                            </Link>
										</div>
										<Link className="text-link" to="#">Food</Link>
										<h2><Link to="single-post.html">Aliquam tincidunt mauriseu</Link></h2>
										<ul className="post-tags">
											<li>by <Link to="#">Stan Enemy</Link></li>
											<li>2 weeks ago</li>
										</ul>
									</div>
								</div>
								<div className="col-md-6">
									<div className="news-post standard-post left-align">
										<div className="image-holder">
											<Link to="single-post.html">
                                                <img src="upload/blog/home2/m7.jpg" alt="" />
                                            </Link>
										</div>
										<Link className="text-link" to="#">Lifestyle</Link>
										<h2><Link to="single-post.html">Praesent placerat risus.</Link></h2>
										<ul className="post-tags">
											<li>by <Link to="#">Stan Enemy</Link></li>
											<li>2 weeks ago</li>
										</ul>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
    );
};


export default Trending;