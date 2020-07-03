import React from 'react'
import Header from '../Parts/Header';
import Slider from '../Parts/Imgslider';
import Trending from '../Parts/Trending_Pages';
import Fresh from '../Parts/Fresh_stories';
import Footer from '../Parts/Footer';
const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <Trending />
            <Fresh />
            <Footer />
        </>
    );
};



export default Home;