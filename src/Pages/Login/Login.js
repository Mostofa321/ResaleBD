import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let { login, googleLogin } = useContext(AuthContext);
    const [errMessage, setErrMessage] = useState(null);
    const [successMessage, setSuccesMeassage] = useState(null);
    // logit with email and password 
    const loginUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
        if (!email || !password) {
            return
        };
        login(email, password)
            .then(result => {
                const user = result.user;
                setSuccesMeassage('user logined successfully');
                form.reset();
                let from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            })
            .catch(err => {
                const errorMessage = err.message;
                setErrMessage(errorMessage);
            });

    };
    // login with google 
    const loginGoogle = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                const googleUser = { name: user.displayName, email: user.email, userRole: "buyer" };
                saveUser(googleUser);
                let from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }

    // save google user to database 
    const saveUser = (user) => {
        console.log(user)
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // return toast("Food Added Successfully!")
                };
            })
            .catch(err => console.log(err));
    };
    return (
        <div className='pt-5 container flex mx-auto my-10'>
            <div className='mx-auto p-5 form w-11/12 md:w-5/12' style={{ boxShadow: "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px" }}>
                <form onSubmit={loginUser}>
                    <h2 className='mb-4'>Login</h2>
                    <div className="mb-3">
                        <input type="email" name='email' className="input input-bordered w-full" placeholder='email' />
                    </div>
                    <div className="mb-3">
                        <input type="password" name='password' className="input input-bordered w-full" placeholder='password' />
                    </div>
                    {
                        successMessage ? <p className='text-success'>{successMessage}</p> : <p className='text-danger'>{errMessage}</p>
                    }
                    <button type="submit" className="btn btn-primary w-full">Sign In</button>
                </form>
                <div className='flex items-center'>
                    <hr className=' mr-4' style={{ border: "1px solid", width: "45%", height: "1px" }} />
                    <h3 className='text-lg'>or</h3>
                    <hr className=' ml-4' style={{ border: "1px solid", width: "45%", height: "1px" }} />
                </div>
                <button onClick={loginGoogle} type="submit" className="btn btn-secondary w-full">Sign In With Google <i className="fa-brands fa-google ml-2 text-lg"></i></button>
                <p className='mt-5'><small className='mr-3'>dont have an account yet?</small><Link to='/signUp'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;


