import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Buy() {
  const { id } = useParams();
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
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
  const buynow =()=>{
    alert("Purchase Successfull");

  }
  return (
    <div className='bg-dark'>
      <div className='position-absolute top-50 start-50 translate-middle bg-dark' style={{ width: "600px" }}>
        <img src={image} className="img-fluid" alt='loading' />
        <h4 className="text-warning">{title}</h4>
        <h3 className="text-light">{description}</h3>
        <div>
          <h3 className=" text-warning">Price: ₹{price}</h3>
          <Link className="btn btn-warning" to='/books' >
            <button  onclick={buynow}>Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Buy