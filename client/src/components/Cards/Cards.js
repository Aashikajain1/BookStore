import React from 'react'

function Cards({s,title}) {
    return (
        <div>
            <div>
                <div className="bg-light bg-gradient rounded  text-center mt-3 mx-4 crd" style={{ height: '300px', width: '300px', boxShadow: "0px 0px 10px rgb(180,180,180)"}}>
                    <img src={s} className="mt-0 img-fluid w-100 h-75"  alt="loading" />
                    <h4 className=" text-black text-center mt-2">{title}</h4>
                </div>
            </div>
        </div>
    )
}

export default Cards;