import React from 'react';
import { Link } from 'react-router-dom';
function Post( {_id,author, title, description,cover_image,publication_year,price}) {
  return (  
    <div className='mb-5 bg-dark bg-gradient text-light rounded mx-3 p-3 crd'style={{width:"400px",height:"460px",cursor:"pointer",}}>
              <img src={cover_image} alt="..." className='img-fluid w-100' style={{height:200}}/>
              <h5 className='text-warning'>{title}</h5>
              <div className='d-flex flex-wrap justify-content-between'>
                <h6 className='ms-1'>Author:-{author}</h6>
                <h6 className='me-2'>Publication Year:-{publication_year}</h6>
              </div>
              <h6 className='fs-5 text-wrap'>{description}</h6>
              <div className='d-flex flex-wrap justify-content-between mx-2'>
              <h4 className='text-warning'>Price: ₹{price}</h4>
              <Link to={`/buy/${_id}`}  className=' btn btn-outline-warning text-decoration-none fs-5 rounded p-1 w-50 text-center'>BuyNow</Link>
              </div>
     </div>
  )
}
export default Post;                            