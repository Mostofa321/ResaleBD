import React, { useEffect, useState } from 'react';

const ProductCategories = () => {
    const [productCategories, setProductCategories] = useState([]);
    useEffect(() => {
        fetch('productCategories.json')
            .then(res => res.json())
            .then(data => setProductCategories(data))
    }, [])
    return (
        <div className='container mx-auto mt-10 flex flex-col sm:flex-row sm:items-center'>
            <div className='flex sm:w-1/4'>
                <h1 className='text-3xl my-5'>Product Categories</h1>
                <i className="fa-solid fa-arrow-right-long text-3xl mt-6 ml-2 "></i>
            </div>
            <div className='flex flex-col sm:flex-row sm:w-3/4  justify-between '>
                {
                    productCategories.map(productCategorie => {
                        const { id, categoryName, categoryLogo } = productCategorie
                        return (
                            <div className="  my-5 mx-auto" key={id}>
                                <div className="sm:w-24 w-32 mx-auto rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                                    <img src={categoryLogo} className="  rounded-full" />
                                </div>
                                <h1 className='text-4xl mt-2 text-center btn btn-outline border-0'>{categoryName}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductCategories;