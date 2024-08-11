import React, { useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import toast from 'react-hot-toast'
import bg2 from './pic1.gif'
import bg1 from './map.png'
import I1 from "./email.png"
import I2 from "./phone-call.png"
import I3 from "./home-button.png"
import '../Login/Login.css'

function Contact(_) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const addMessage = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact`,
            {
                name: name,
                email: email,
                msg: message
            })
        toast.success(response.data.message)
        setName('');
        setEmail('');
        setMessage('');
    }

    const backgroundmessageStyle = {
        background: 'linear-gradient(to right, rgba(10, 9, 9, 1)40%,white)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100vw',
    };
    return (
        <div style={backgroundmessageStyle}>
            <Header />
            <div className=' mx-5 mt-5'>
                <div className='bg-light'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238221.56230591921!2d79.002088!3d21.1041161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd49548aa82b4eb%3A0x39d22094a91dd21e!2sKDK%20Girl%20Hostel!5e0!3m2!1sen!2sin!4v1722837999629!5m2!1sen!2sin"
                        background="black"
                        loading="lazy"
                        className='img-fluid w-100'
                        ></iframe>
                    <div className='d-flex flex-wrap'>
                        <img src={bg1} className='mx-5' style={{ height: "35px" }} alt="loading" />
                        <h5 className='mx-5'>4232+MV4, Police Nagar, Nagpur, Digdoh, Maharashtra 440016</h5>
                    </div>
                    <div className='bg-dark d-flex flex-wrap justify-content-around'>
                        <div className='d-flex flex-column'>
                            <img src={I2} alt="loading" className='m-5' style={{ width: "40px" }} />
                            <a href="tel:7385122661" className='fs-3 text-warning text-decoration-none'>7385122661 </a>
                        </div>
                        <div className='d-flex flex-column'>
                            <img src={I1} alt="loading" className='m-5' style={{ width: "40px" }} />
                            <a href="mailto:jainaashika@1510" className='fs-3 text-warning text-decoration-none'>Bookstore@gamil.com </a>
                        </div>
                        <div className='d-flex flex-column'>
                            <img src={I3} alt="loading" className='m-5' style={{ width: "40px" }} />
                            <a href="/" className='fs-3 text-warning text-decoration-none'>Bookstore</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={backgroundmessageStyle} className=''>
                <div className=' d-flex  mt-5 justify-content-center flex-wrap'>
                    <img src={bg2} className=' w-25' alt="loading" />
                    <div className='w-50 bg-dark'>
                        <p className='fs-3 bg-warning text-dark text-center p-3'>Thanks for contacting us</p>
                        <p className='fs-3 my-5 mx-5 text-warning mx-1'>Name</p>
                        <input
                            type='text'
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className='p-2 w-75 border border-5 border-warning mx-5 '
                        /><br />
                        <p className='fs-3 my-5 mx-5 text-warning mx-1'>Email</p>
                        <input
                            type='text'
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className='p-2 w-75 border border-5 border-warning mx-5 '
                        /><br />
                        <p className='fs-3 my-5 mx-5 text-warning mx-5'>Message</p>
                        <input
                            type='text'
                            placeholder="Enter Message"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            className='p-4 w-75 border border-5 border-warning mx-5 '
                        /><br />
                        <h1 onClick={addMessage} className=" text-center btn btn-outline-warning w-25 my-2" style={{marginLeft:"30%"}}>Send</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact