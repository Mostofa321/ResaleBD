import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const AllSeller = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch('https://assignment-12-server-red.vercel.app/allSellers')
            .then(res => res.json())
            .then(data => setSellers(data))
    }, [])
    // console.log(sellers);
    return (
        <div>
            <h1 className='text-2xl'>All Seller</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers?.map((seller, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <button className="btn btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;