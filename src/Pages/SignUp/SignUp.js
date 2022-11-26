import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../Contexts/AuthProvider';
// import { auth, AuthContext } from '../../contexts/UserContexts';

const SignUp = () => {
    const navigate = useNavigate()
    const { signUp, googleLogin } = useContext(AuthContext);
    const [errMessage, setErrMessage] = useState(null)
    const [successMessage, setSuccesMeassage] = useState(null)
    const createUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        const userPhoto = form.userPhoto.value;
        if (!name || !email || !password || !userPhoto) {
            return
        }
        signUp(email, password)
            .then(result => {
                const user = result.user;
                setSuccesMeassage('user created succesfuly');
                updateUserProfile(name, userPhoto)
                form.reset();
                navigate('/')
            })
            .catch(err => {
                const errorMessage = err.message;
                setErrMessage(errorMessage);
            });

    }
    const updateUserProfile = (name, userPhoto, user) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: userPhoto
        })
            .then(() => {
                console.log("updated")
            })
            .catch(err => console.log(err))
    }
    // sign up with google 
    const signUpGoogle = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='pt-5 container flex mx-auto my-10'>
            <form onSubmit={createUser} className='mx-auto p-5 w-11/12 md:w-5/12' style={{ boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                <h2 className='mb-4'>Sign Up</h2>
                <div className="mb-3">
                    <input type="text" name='name' className="input input-bordered w-full" placeholder='Full name' />
                </div>
                <div className="mb-3">
                    <input type="email" name='email' className="input input-bordered w-full" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <input type="password" name='password' className="input input-bordered w-full" placeholder='Password' />
                </div>
                <div className="mb-3">
                    <input type="url" name='userPhoto' className="input input-bordered w-full" placeholder='enter your photo url' />
                </div>

                {
                    successMessage ? <p className='text-success'>{successMessage}</p> : <p className='text-danger'>{errMessage}</p>
                }

                <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                <div className='flex items-center'>
                    <hr className=' mr-4' style={{ border: "1px solid", width: "45%", height: "1px" }} />
                    <h3 className='text-lg'>or</h3>
                    <hr className=' ml-4' style={{ border: "1px solid", width: "45%", height: "1px" }} />
                </div>
                <button onClick={signUpGoogle} type="submit" className="btn btn-secondary w-full">Sign Up With Google <i className="fa-brands fa-google ml-2 text-lg"></i></button>
                <p className='mt-5'><small className='mr-3'>Already have an account?</small><Link to='/login'>Sign In</Link></p>
            </form>
        </div>
    );
};

export default SignUp;