import React from 'react'
import PostDesc from '../Parts/PostDesc';
import Comment from '../Parts/Comment';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
const Single = () => {
    return (
        <>
            <Header />
            <div className="single-post no-sidebar">
                
                <PostDesc />
                <Comment />
            </div>
            <Footer />
        </>
    );
};



export default Single;