import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <footer>
			<div className="container">

				<h1>Vishnu</h1>
				<p className="copyright-line">© Copyright 2019 - All rights reserved.</p>
				<ul className="social-list">
					<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
					<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
					<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
					<li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
				</ul>

			</div>

		</footer>
    );
};


export default Footer;