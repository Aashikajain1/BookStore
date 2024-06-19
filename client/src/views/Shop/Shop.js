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
      </div>*/
  return (
    <div>
        <Header />
        <div className='mt-5 d-flex flex-wrap justify-content-between mx-5 mb-5'>
            {
               books.map((bookObj) => {
                const { author, title, description, cover_image, publication_year } = bookObj;
                return (<Post author={author} title={title} description={description} cover_image={cover_image} publication_year={publication_year} />)
              }) 
            }
        </div>
       
        <Footer />
    </div>
  )
}

export default Shop