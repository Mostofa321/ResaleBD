import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto w-11/12 bg-green-100' style={{boxShadow: "-10px 10px 0px rgba(33, 33, 33, 1), -20px 20px 0px rgba(33, 33, 33, 0.7), -30px 30px 0px rgba(33, 33, 33, 0.4), -40px 40px 0px rgba(33, 33, 33, 0.1)"}}>
            <h1 className='text-center text-5xl pt-7 mt-7'>
                CONTACT US
            </h1>
            <div className="card mb-10">
                <div className="md:flex  gap-0 flex-row-reverse justify-center items-center content-center">
                    <div className="basis-1/2">
                        <form className='mx-auto p-12  w-full' >
                            <div className="mb-3">
                                <input type="text" name='name' className="input input-bordered w-full " placeholder='Enter Your Name' />
                            </div>
                            <div className="mb-3">
                                <input type="email" name='email' className="input input-bordered w-full " placeholder='Email' />
                            </div>
                            <div>
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
        </div>
    );
};

export default Contact;