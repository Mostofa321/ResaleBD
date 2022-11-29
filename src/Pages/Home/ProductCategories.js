import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
    const { data: productCategories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <div>Loading.....</div>
    }

    return (
        <div className='container mx-auto mt-10 flex flex-col sm:flex-row sm:items-center'>
            <div className='flex sm:w-1/4'>
                <h1 className='text-3xl my-5'>Product Categories</h1>
                <i className="fa-solid fa-arrow-right-long text-3xl mt-6 ml-2 "></i>
            </div>
            <div className='flex flex-col sm:flex-row sm:w-3/4  justify-between '>
                {
                    productCategories.map(productCategorie => {
                        const { _id, categoryName, categoryLogo } = productCategorie
                        return (
                            <Link to={`/category/${_id}`} key={_id}>
                                <div className="  my-5 mx-auto" >
                                    <div className="sm:w-24 w-32 mx-auto rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
                                        <img src={categoryLogo} className="  rounded-full" />
                                    </div>
                                    <h1 className='text-4xl mt-2 text-center btn btn-outline border-0'>{categoryName}</h1>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductCategories;