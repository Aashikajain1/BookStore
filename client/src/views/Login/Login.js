import { React, useState } from 'react'
import { Link} from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'
import './Login.css';
import bg1 from './b1.jpg'
function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const backgroundImageStyle = {
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // adjust height as needed
        width: '100vw', // adjust width as needed
        boxShadow: 'inset 30px 30px 40px black',
    };
    const handleSubmit= async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`,
            {
                email,
                password
            })
            if(response.data.message === "Login successful"){
                console.log(response.data.message);
                window.location.href = '/home';
                toast.success(response.data.message);
            }
            else{
                console.log(response.data.message)
                toast.error(response.data.message);
                setEmail('');
                setPassword('');
            }
    }
   /* const handleSubmit = (e) => {
        const response = axios.post(`${process.env.REACT_APP_API_URL}/login`, { email: email, password: password })

            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    navigate('/home');
                    toast.success(response.data.message)
                }
            })
            .catch(err => toast.faliure(response.data.message)
            )
    }*/
    return (
        <div style={backgroundImageStyle} className='fixed-top'>
            <h2 className='text-center text-light mt-5'>Welcome to the world of MYSTERY....!!</h2>
            <div className='d-flex con'>
                <img src={bg1} alt='.....' className='w-50 img' />
                <div className='bg-transparent rounded text-danger-emphasis w-50 fs-5'>
                    <div className='box p-5'>
                        <h1 className='text-center text-light'>Login</h1><br />
                        <form onSubmit={handleSubmit} className='w-100'>
                            <div className='mb-3 ms-3' >
                                <label htmlFor='email'>
                                    <strong className='ms-0'>Email</strong>
                                </label><br />
                                <input
                                    type='email'
                                    placeholder='Enter Email'
                                    autoComplete='off'
                                    name='email'
                                    className=' bg-transparent custom-placeholder  '
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
                                    className='bg-transparent custom-placeholder '
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
            <p className='text-light'>New User?Create New Account <Link className='text-decoration-none' to="/">SignUp</Link></p>
        </div>

    )
}
export default Login