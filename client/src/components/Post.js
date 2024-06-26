import React from 'react';

function Post( {author, title, description,cover_image,publication_year}) {
  /* <a href="/" className='bg-primary text-light text-decoration-none fs-5 rounded p-1'>Read More</a>*/

  return (
    
    <div className='shadow mb-5 bg-dark bg-gradient text-light rounded ms-3'style={{width:"400px"}}>
              <img src={cover_image} alt="..." className='img-fluid w-100' style={{height:200}}/>
              <h5 className='text-warning'>{title}</h5>
              <div className='d-flex flex-wrap justify-content-between'>
                <h6 className='ms-1'>Author:-{author}</h6>
                <h6 className='me-2'>Publication Year:-{publication_year}</h6>
              </div>
              <h6 className='fs-5'>{description}</h6>
     </div>
    
  )
}

export default Post;                            