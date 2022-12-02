import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const AllBuyer = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allBuyer')
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, []);

    return (
        <div>
            <h1 className='text-2xl'>All Buyer</h1>
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
                            buyers?.map((buyer, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    <button  className="btn btn-circle btn-outline">
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

export default AllBuyer;