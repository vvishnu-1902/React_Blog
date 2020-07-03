import React from 'react'
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import Breadcrumb from '../Parts/Breadcrumb';
import Post from '../Parts/Post';
import Sidebar from '../Parts/Sidebar';
const Category = () => {
    return (
        <>
        <Header />
        <Breadcrumb />
        <section className="blog-section">
			<div className="container">
				<div className="row">
					<Post />
                    <Sidebar />
				</div>
			</div>
		</section>
        <Footer />
        </>
    );
};



export default Category;