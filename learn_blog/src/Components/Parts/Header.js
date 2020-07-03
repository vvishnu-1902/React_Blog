import React from 'react';
import Navbar from './Navebar'
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <header className="clearfix header-style5">
			<div className="logo-place">
				<div className="container">
					<div className="inner-logo-place">
						<Link className="navbar-brand" to="index.html">
							<img src="./images/logo.png" alt="" />
						</Link>
					</div>
				</div>
			</div>
			<Navbar />
			
		</header>
    );
};


export default Header;