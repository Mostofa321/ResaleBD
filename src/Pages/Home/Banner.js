import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/4gz3rmM/banner-Bg1.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome to SaleBD (A marketplace for buying/selling old mobiles). You can buy old mobile according to your choice or sell your old mobile by opening a seller account on this marketplace</p>
                    <Link to='/login'><button className="btn glass rounded-none px-12 z-0">GO TO LOGIN</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;