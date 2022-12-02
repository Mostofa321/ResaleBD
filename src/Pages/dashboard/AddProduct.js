import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [fieldValue, setFieldValue] = useState({});
    const navigate = useNavigate();
    const { data: productCategories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-red.vercel.app/categories');
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <div>Loading.....</div>
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('🦄 Added Product successfully!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        // save product to database 
        fetch('https://assignment-12-server-red.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fieldValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    e.target.reset();
                    
                    navigate('/dashboard/myProducts');
                };
            })
            .catch(err => console.log(err));

    };
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const { ...newFieldValue } = fieldValue;
        newFieldValue[field] = value;
        newFieldValue.sellerEmail = user?.email;
        newFieldValue.sellerName = user?.displayName;
        newFieldValue.postTime = new Date().toLocaleString();
        const selectedCategory = newFieldValue?.categoryName &&
            productCategories.find(productCategorie => productCategorie.categoryName === newFieldValue?.categoryName);
        if (selectedCategory) {
            newFieldValue.categoryId = selectedCategory?._id
        }
        setFieldValue(newFieldValue);
        console.log(newFieldValue);
    }
    return (
        <div>
            <h1 className='text-2xl'>Add A Product</h1>
            <div className='pt-5 container flex mx-auto my-10'>
                <form onSubmit={handleSubmit} className='mx-auto p-5 w-11/12 md:w-8/12' style={{ boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                    <div className="mb-3">
                        <input type="text" onBlur={handleBlur} name='name' className="input input-bordered w-full" placeholder='Product Name' required />
                    </div>
                    <div className="mb-3">
                        <input type="url" onBlur={handleBlur} name='image' className="input input-bordered w-full" placeholder='Product Image Url' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onBlur={handleBlur} name='resalePrice' className="input input-bordered w-full" placeholder='Resale Price' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onBlur={handleBlur} name='originalPrice' className="input input-bordered w-full" placeholder='Original Price' required />
                    </div>
                    <div className="mb-3">
                        <input type="number" onBlur={handleBlur} name='yearsOfUse' className="input input-bordered w-full" placeholder='Years Of Use' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onBlur={handleBlur} name='condition' className="input input-bordered w-full" placeholder='condition type(excellent, good, fair)' required />
                    </div>
                    <div className="mb-3">
                        <input type="number" onBlur={handleBlur} name='mobileNumber' className="input input-bordered w-full" placeholder='mobile number' required />
                    </div>
                    <div className="mb-3">
                        <input type="text" onBlur={handleBlur} name='location' className="input input-bordered w-full" placeholder='Location (Chittagong, Dhaka, etc.)' required />
                    </div>
                    <select onBlur={handleBlur} name='categoryName' className="select select-bordered w-full mb-3" required>
                        <option value=''>select a product category</option>
                        {
                            productCategories?.map(productCategorie => <option key={productCategorie._id}>{productCategorie?.categoryName}</option>)
                        }
                    </select>
                    <textarea onBlur={handleBlur} name='description' className="textarea textarea-bordered w-full" placeholder="description" required></textarea>
                    <button type="submit" className="btn btn-secondary btn-outline w-full">Add Product</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AddProduct;