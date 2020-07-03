import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () =>{
    return(
        <section className="top-slider-section fullscreen-slider">
			<div className="top-slider-box text-center">
				<div className="owl-wrapper">
					<div className="owl-carousel" data-num="1">
		
						<div className="item">
							<div className="news-post image-post">
							 	<img src="upload/blog/home5/sl1.jpg" alt="" />
								<div className="hover-post">
									<div><Link className="category-link" to="#">Travel</Link></div>
									<h2><Link to="single-post.html">Integer vitae libero acrisus egestas.</Link></h2>
									<ul className="post-tags">
										<li><Link to="#">3 comments</Link></li>
										<li>3 days ago</li>
										<li>by <Link to="#">John Smith</Link></li>
									</ul>
									<Link className="white-button" to="single-post.html">View Post</Link>
								</div>
							</div>
						</div>
		
						<div className="item">
							<div className="news-post image-post">
							 	<img src="upload/blog/home5/sl2.jpg" alt="" />
								<div className="hover-post">
									<div><Link className="category-link" to="#">Lifestyle</Link></div>
									<h2><Link to="single-post.html">Praesent placerat risus quis eros.</Link></h2>
									<ul className="post-tags">
										<li><Link to="#">3 comments</Link></li>
										<li>3 days ago</li>
										<li>by <Link to="#">John Smith</Link></li>
									</ul>
									<Link className="white-button" to="single-post.html">View Post</Link>
								</div>
							</div>
						</div>

					</div>
					
				</div>
			</div>
		</section>
    );
};


export default Slider;