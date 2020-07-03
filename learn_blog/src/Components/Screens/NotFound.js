import React from 'react'
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Header />
            <section className="error-section">
                <div className="container">
                    <div className="error-box">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>We are sorry. But the page you are looking for cannot be found. </p>
                        <Link className="button-one" to="index.html">Go To HomePage</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};



export default NotFound;