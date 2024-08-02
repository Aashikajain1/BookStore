import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Post from '../../components/Post';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function Shop() {
    const [books, setBooks] = useState([]);
  const loadBooks = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`);

    setBooks(response.data.data);
  }
  useEffect(() => {
    loadBooks();
  }, []);
  /* <div className='d-flex flex-wrap justify-content-between mt-5 mx-5 mb-5' id="box">
        {
          books.map((bookObj) => {
            const { author, title, description, cover_image, publication_year } = bookObj;
            return (<Post author={author} title={title} description={description} cover_image={cover_image} publication_year={publication_year} />)
          })
        }
      </div>
      
      <div className='d-flex'>
            <div className='card bg-dark'>
              <h5 className="card-title" style={{ color: '#ffcc00' }}>Welcome to Our Bookstore</h5>
              <h6 className='text-light'>
                Discover a world of books at our bookstore! From timeless classics to the latest bestsellers, we have something for every reader.
                Our goal is to create a cozy environment where you can explore, relax, and find your next favorite read.
              </h6>
            </div>
            <div className='card bg-dark'>
            <h5 className="card-title" style={{ color: '#ffcc00' }}>Our Mission</h5>
                  <p className="card-text">
                    We aim to inspire a love of reading and provide a haven for book lovers. Our store is more than just a place to buy books; it’s a place to connect with fellow readers, attend events, and engage with the literary community.
                  </p>
            </div>
          </div>*/
  return (
    <div>
        <Header />
        <div className='mt-5 d-flex flex-wrap justify-content-between mx-5 mb-5'>
            {
               books.map((bookObj) => {
                const { _id,author, title, description, cover_image, publication_year,price } = bookObj;
                return (<Post _id={_id} author={author} title={title} description={description} cover_image={cover_image} publication_year={publication_year} price={price}/>)
              }) 
            }
        </div>
       
        <Footer />
    </div>
  )
}

export default Shop