import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ productName, productPrice }) => {
    const { user } = useContext(AuthContext);

    const [bookedProduct, setBookedProduct] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.name.value;
        const userEmail = e.target.email.value;
        const productName = e.target.productName.value;
        const productPrice = e.target.productPrice.value;
        const phoneNumber = e.target.phoneNumber.value;
        const meetingLocation = e.target.meetingLocation.value;
        const bookedProductInfo = { userName, userEmail, productName, productPrice, phoneNumber, meetingLocation};
        setBookedProduct(bookedProductInfo);
        
        e.target.reset();
        toast("the item is booked!")
    };
    
    // console.log(bookedProduct)
    

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='mx-auto p-5 ' style={{ boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                        <h2 className='mb-4'>BOOK NOW</h2>
                        <div className="mb-3">
                            <label className="label">
                                <span className="label-text">User Name :</span>
                            </label>
                            <input type="text" name='name' value={user?.displayName} className="input input-bordered w-full" placeholder='User name' disabled />
                        </div>
                        <div className="mb-3">
                            <label className="label">
                                <span className="label-text">Email :</span>
                            </label>
                            <input type="email" name='email' value={user?.email} className="input input-bordered w-full" placeholder='Email' disabled />
                        </div>
                        <div className="mb-3">
                            <label className="label">
                                <span className="label-text">Product Name :</span>
                            </label>
                            <input type="text" name='productName' value={productName} className="input input-bordered w-full" placeholder='Password' disabled />
                        </div>
                        <div className="mb-3">
                            <label className="label">
                                <span className="label-text">Product Price :</span>
                            </label>
                            <input  type="text" name='productPrice' value={productPrice} className="input input-bordered w-full" placeholder='enter your photo url' disabled />
                        </div>
                        <div className="mb-3">
                            <label className="label">
                                <span className="label-text">phone number :</span>
                            </label>
                            <input type="number" name='phoneNumber' className="input input-bordered w-full" placeholder='enter your phone number ' />
                        </div>
                        <div className="mb-3">
                            <label className="label">
                                <span className="label-text">meeting location :</span>
                            </label>
                            <input type="text" name='meetingLocation' className="input input-bordered w-full" placeholder='enter meeting location ' />
                        </div>
                        <div className="modal-action">
                            <button type="submit" htmlFor="my-modal-6" className="btn btn-secondary w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Modal;