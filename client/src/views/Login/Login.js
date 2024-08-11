import { React, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'
import './Login.css';
import bg1 from './bg1.gif';
import bg2 from './bg1.jpg';
function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const backgroundImageStyle = {
        backgroundColor: `black`,
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // adjust height as needed
        width: '100%', // adjust width as needed
        boxShadow: 'inset 10px 0px 70px black',
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                email,
                password,
            });

            if (response.data.message === "Login successful") {
                toast.success(response.data.message);
                localStorage.setItem('currentUser', JSON.stringify(response.data.data))

                toast.loading('Redirecting to dashboard...')

                setTimeout(() => {
                    window.location.href = '/'
                }, 3000)
            } else {
                toast.error(response.data.message);
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            toast.error("An error occurred during login. Please try again.");
            setEmail('');
            setPassword('');
        }
    }
    return (
        <div style={backgroundImageStyle} className='fixed-top'>
            <h2 className='text-center text-warning mt-5'>Welcome to the world of MYSTERY....!!</h2>
            <div className='d-flex con'>
                <img src={bg1} alt='.....' className='w-50 img' />
                <div className='bg-transparent rounded text-warning w-50 fs-5'>
                    <div className='box p-5'>
                        <h1 className='text-center text-warning'>Login</h1><br />
                        <form onSubmit={handleSubmit} className='w-100'>
                            <div className='mb-3 ms-3' >
                                <label htmlFor='email'>
                                    <strong className='ms-0'>Email</strong>
                                </label><br />
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    name='email'
                                    className=' bg-transparent custom-placeholder text-light'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='mb-3 ms-3'>
                                <label htmlFor='password'>
                                    <strong>Password</strong>
                                </label><br />
                                <input
                                    type='password'
                                    placeholder='Enter Password'
                                    name='password'
                                    className='bg-transparent custom-placeholder text-light'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type='submit' className='btn rounded-pill text-light button ' onClick={handleSubmit}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <p className='text-warning para'>New User?Create New Account <Link className='text-decoration-none text-light' to="/signup">SignUp</Link></p>
        </div>

    )
}
export default Login