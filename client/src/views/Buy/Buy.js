import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Toaster,toast} from 'react-hot-toast'
import { useParams } from 'react-router-dom'

function Buy() {
  const { id } = useParams();
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const loadBook = async (id) => {
    if (!id) {
      return
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/buy/${id}`)
    console.log(response);

    const { title, cover_image, price, description } = response.data.data
    setTitle(title)
    setDescription(description)
    setImage(cover_image)
    setPrice(price)
  }
  useEffect(() => {
    loadBook(id)

  }, [id])
  const buynow = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    if (name && email && address) {
      toast.success('Order Successful!', {
        position: 'top-center', // Position of the toast
        duration:3000, // Duration of the toast in milliseconds
      });
      setName("");
      setAddress("");
      setEmail("");
      window.location.href = '/books';
    }
    else {
      if (!name) {
        toast.error("enter name")
      }
      else if (!email) {
        toast.error("enter email")

      }
      else {
        toast.error("enter address")
      }
    }
  }
  return (
    <div>
      <div className='d-flex justify-content-center bg-dark h-100 '>
        <div className="d-flex flex-column justify-content-around border border-warning m-5" >
          <p className='fs-1 d-flex justify-content-center text-warning text-decoration-underline'>Buy Now</p>
          <img src={image} className="img-fluid px-3 h-50" alt='loading' />
          <h4 className="text-warning px-5">{title}</h4>
          <h3 className="text-light px-5">{description}</h3>
          <div className=' px-5'>
            <div className='d-flex'><p className='fs-3  text-light mx-1'>Name</p>
              <input
                type='text'
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className='w-100 mx-5 h-25 border border-bottom-5 text-light border-warning  bg-transparent py-3 '
              /></div><br />
            <div className='d-flex'><p className='fs-3 text-light'>Email</p>
              <input
                type='text'
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className='w-100 mx-5 h-25 border border-bottom-5 text-light border-warning  bg-transparent py-3'
              /></div><br />
            <div className='d-flex'><p className='fs-3 text-light'>Address</p>
              <input
                type='text'
                placeholder="Enter Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className='p-4 w-100 mx-5 h-25 border border-bottom-5 text-light border-warning  bg-transparent '
              /></div><br />
            <div className='d-flex justify-content-around mb-5'>
              <h3 className=" text-warning">Price: ₹{price}</h3>
              <button className="btn btn-warning  px-5 mx-5" onClick={buynow} >Buy Now</button>
            </div><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy