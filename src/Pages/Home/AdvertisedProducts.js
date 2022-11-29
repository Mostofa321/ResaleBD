import { useState } from 'react';
import { useQuery } from 'react-query';
import Modal from '../Shared/Modal';

const AdvertisedProducts = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const { data: availableProducts = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data
        }
    });
 
    if (isLoading) {
        return <div>Loading.....</div>
    }


    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-center text-4xl'>Available Products</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 bg-green-100 p-10'>
                {
                    availableProducts.map(availableProduct => {
                        const { _id, image, name, location, resalePrice, originalPrice, yearsOfUse, postTime, sellerName } = availableProduct
                        return (
                            <div className="card w-96 bg-base-100 shadow-xl" key={_id}>
                                <figure className="px-10 pt-10">
                                    <img src={image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p>location: {location}</p>
                                    <p>resale price: {resalePrice}</p>
                                    <p>original price: {originalPrice}</p>
                                    <p>years of use: {yearsOfUse}</p>
                                    <p>posted on: {postTime}</p>
                                    <p>seller: {sellerName}</p>
                                    <div className="card-actions">
                                        <label onClick={()=> {
                                            setProductName(name);
                                            setProductPrice(resalePrice)
                                        }} htmlFor="my-modal-6" className="btn btn-primary">Book now</label>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Modal productName={productName} productPrice={productPrice}/>
        </div>
    );
};

export default AdvertisedProducts;


