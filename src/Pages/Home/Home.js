import React from 'react';
import AdvertisedProducts from './AdvertisedProducts';
import Banner from './Banner';
import Contact from './Contact';
import ProductCategories from './ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AdvertisedProducts/>
            <ProductCategories/>
            <Contact/>
        </div>
    );
};

export default Home;