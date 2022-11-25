import React from 'react';

const Contact = () => {
    return (
        <>
            <h1 className='text-center text-5xl mb-5 mt-14'>
                CONTACT US
            </h1>
            <div className="card container mb-10  bg-green-100 mx-auto" style={{boxShadow: "-10px 10px 0px rgba(33, 33, 33, 1), -20px 20px 0px rgba(33, 33, 33, 0.7), -30px 30px 0px rgba(33, 33, 33, 0.4), -40px 40px 0px rgba(33, 33, 33, 0.1)"}} >
                <div className="md:flex  gap-0 flex-row-reverse justify-center items-center content-center">
                    <div className="basis-1/2">
                        <form className='mx-auto p-12  w-full' >
                            <div className="mb-3">
                                <input type="text" name='name' className="input input-bordered w-full " placeholder='Enter Your Name' id="exampleInputText" aria-describedby="textHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="email" name='email' className="input input-bordered w-full " placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-floating">
                                <textarea className="textarea textarea-bordered w-full" name='description' placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline mt-3 w-full">Send Message</button>
                        </form>
                    </div>
                    <div className="basis-1/2">
                        <div className="card-body text-center">
                            <p className="card-text">Phone: +8801882580190</p>
                            <p className="card-text">Email: hmshumon123@gmail.com</p>
                            <p className="card-text">Address: Level-2, 28, Ahsan Bag, Kamrangirchar, Dhaka-1211</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;