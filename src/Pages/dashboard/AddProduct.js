import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    return (
        <div>
            <h1 className='text-2xl'>Add A Product</h1>
            <div className='pt-5 container flex mx-auto my-10'>
                <form  className='mx-auto p-5 w-11/12 md:w-8/12' style={{ boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                    <h2 className='mb-4'>Sign Up</h2>
                    <div className="mb-3">
                        <input type="text" name='name' className="input input-bordered w-full" placeholder='Full name' required />
                    </div>
                    <div className="mb-3">
                        <input type="email" name='email' className="input input-bordered w-full" placeholder='Email' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' className="input input-bordered w-full" placeholder='Password' required />
                    </div>
                    <select name='select' defaultValue="buyer" className="select select-bordered w-full mb-3">
                        <option>buyer</option>
                        <option>seller</option>
                    </select>
                    <button type="submit" className="btn btn-primary w-full">Add Product</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddProduct;