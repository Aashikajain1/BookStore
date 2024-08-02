import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IframeComponent from '../../components/IframeComponent/Iframe';
import { useState, useEffect } from 'react'
import axios from 'axios';
function Read() {
    const [rlink, setRlink] = useState([]);
    const loadLinks = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/read`);
  
      setRlink(response.data.data);
    }
    useEffect(() => {
      loadLinks();
    }, []);
  return (
    <div>
        <Header/>
        {
               rlink.map((bookObj) => {
                const {id,rlink} = bookObj;
                return (<IframeComponent id={id} rlink={rlink} />)
              }) 
            }
        <IframeComponent/>
        <Footer/>
    </div>
  )
}

export default Read