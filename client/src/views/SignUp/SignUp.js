import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';
import bg2 from './bg2.avif'
import bg1 from './bg1.jpg'
import '../Login/Login.css'
function SignUp() {
    const backgroundImageStyle = {
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // adjust height as needed
        width: '100vw', // adjust width as needed
        boxShadow: 'inset 30px 30px 40px black',
    };

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const addUser = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`,
            {
                name: name,
                email: email,
                password: password
            })
        toast.success(response.data.message)
        setName('');
        setEmail('');
        setPassword('');
    }
    return (
        
            <div style={backgroundImageStyle}  className='fixed-top '>
                    <h2 className='text-center text-warning mt-5'>Welcome to the world of MYSTERY....!!</h2>
                    <div className='d-flex con '>
                        <img src={bg2} alt='.....' className='w-50 img' />
                        <div className='bg-transparent rounded text-warning fixed-center w-50 fs-5 '>
                            <div className='box p-5'>
                                <h1 className='text-center text-warning'>SignUp</h1><br />
                                <form className='w-100'>
                                <div className='mb-3 ms-3' >
                                    <label htmlFor='email'>
                                        <strong>Name</strong>
                                    </label><br />
                                    <input type='text'
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        className=' bg-transparent custom-placeholder text-light'
                                    /><br />
                                    </div>
                                    <div className='mb-3 ms-3'>
                                    <label htmlFor='email'>
                                        <strong>Email</strong>
                                    </label><br />
                                    <input type='email'
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        className=' bg-transparent custom-placeholder text-light' /><br />
                                        </div>
                                        <div className='mb-3 ms-3'>
                                    <label htmlFor='email'>
                                        <strong>Password</strong>
                                    </label><br />
                                    <input type='password'
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        className=' bg-transparent custom-placeholder text-light' /><br /></div>
                                    <button
                                        type='button'
                                        onClick={addUser}
                                        className='btn rounded-pill text-light button mb-2 mt-2'>
                                        SignUp
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <p className='text-warning'>Already Registered ?<Link to="/login" className='text-decoration-none text-light'>Login or SignIn</Link></p>
                </div>
           

    )
}

export default SignUp