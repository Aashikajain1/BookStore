import React from 'react'
import Cards from '../../components/Cards/Cards.js'
import {CARD} from "../../components/config.js"
function Services(){  
    return (
        <div>
            <div className='bg-black bg-gradient'>
                <p className='fs-1 text-warning d-flex justify-content-center'>OUR SERVICES</p>
                <div className="d-flex flex-wrap justify-content-around">
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