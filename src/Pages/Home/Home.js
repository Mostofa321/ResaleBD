import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import ProductCategories from './ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ProductCategories/>
            <Contact/>
        </div>
    );
};

export default Home;