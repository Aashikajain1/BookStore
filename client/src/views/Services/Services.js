import React from 'react'
import Cards from '../../components/Cards/Cards.js'
import {CARD} from "../../components/config.js"
function Services(){  
    return (
        <div>
            <div className='bg-black bg-gradient'>
                <h1 className='text-center text-warning '>OUR SERVICES</h1>
                <div className="d-flex flex-wrap justify-content-between ms-5 ">
                    {
                        CARD.map((cardObj) =>{

                            const { s, title } = cardObj;
                            console.log(cardObj);
                            return <Cards s={s} title={title} />
                        })
                    }</div><br/><br/>
            </div>
        </div>
    )
}
export default Services;