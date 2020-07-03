import React from 'react'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="col-lg-4">
						<div className="sidebar">

							<div className="widget social-widget">
								<ul className="social-list">
									<li>
										<Link to="#">
											<i className="fa fa-facebook"></i>
											facebook
											<span>25k likes</span>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fa fa-twitter"></i>
											twitter
											<span>31k followers</span>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fa fa-instagram"></i>
											instagram
											<span>31k followers</span>
										</Link>
									</li>
								</ul>
							</div>

							<div className="widget category-widget">
								<h2>Categories</h2>
								<ul className="category-list">
									<li>
										<Link to="#">
											Travel <span>24</span>
										</Link>
									</li>
									<li>
										<Link to="#">
											Lifestyle <span>16</span>
										</Link>
									</li>
									<li>
										<Link to="#">
											Food <span>8</span>
										</Link>
									</li>
								</ul>
							</div>

							

							<div className="widget list-widget">
								<h2>Latest Stories</h2>
								<ul className="list-posts">
									<li>
										<Link className="text-link" to="#">Lifestyle</Link>
										<h2><Link to="single-post.html">Fusce pellentesque suscipit.</Link></h2>
										<ul className="post-tags">
											<li>2 days ago</li>
											<li><Link to="#">0 comments</Link></li>
										</ul>
									</li>
									<li>
										<Link className="text-link" to="#">Food</Link>
										<h2><Link to="single-post.html">Integer vitae libero ac risus egestas placerat.</Link></h2>
										<ul className="post-tags">
											<li>2 days ago</li>
											<li><Link to="#">3 comments</Link></li>
										</ul>
									</li>
									<li>
										<Link className="text-link" to="#">Lifestyle</Link>
										<h2><Link to="single-post.html">Vestibulum commodo felisquis tortor.</Link></h2>
										<ul className="post-tags">
											<li>4 days ago</li>
											<li><Link to="#">0 comments</Link></li>
										</ul>
									</li>
									<li>
										<Link className="text-link" to="#">Travel</Link>
										<h2><Link to="single-post.html">Quisque a lectus. </Link></h2>
										<ul className="post-tags">
											<li>4 days ago</li>
											<li><Link to="#">0 comments</Link></li>
										</ul>
									</li>
								</ul>
							</div>

						</div>
					</div>
    );
};



export default Sidebar;