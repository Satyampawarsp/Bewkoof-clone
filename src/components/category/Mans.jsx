import React from 'react'
import './Mans.css'
const Mans = () => {
   const prod=[
        {
            ID:"1",
            img:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-2-1728387649.jpg"
        },
        {
            ID:"2",
            img:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-4-1728387648.jpg"
        },
        {
            ID:"3",
            img:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-16--1--1728464762.jpg"
        },
        {
            ID:"4",
            img:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-18--1--1728388454.jpg"
        },
        {
            ID:"5",
            img:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-6--1--1728387921.jpg"
        },
        {
            ID:"6",
            img:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-8--1--1728387920.jpg"
        },
    ]
    const prod2=[{
        ID:"1",
        img1:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-20--1--1728388573.jpg"
    },
    {
        ID:"2",
        img1:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-22--1--1728388572.jpg"
    },
    {
        ID:"3",
        img1:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-10--1--1728390308.jpg"
    },
    {
        ID:"4",
        img1:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Desktop-1728292976.jpg"
    },
    {
        ID:"5",
        img1:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-14--1--1728388926.jpg"
    },
    {
        ID:"6",
        img1:"https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-24--1--1728390247.jpg"
    },
]
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12  p-1 mt-1">
                <h4 className='text-center brand'>Shop by Category- Men</h4>
            </div>
        </div>
        <div className="row g-0">
            {prod.map((prod)=>(
                <div className="col-2 col- col-lg-2">
                <img src={prod.img} alt="" style={{width:"100%"}} />
            </div>
            ))}
        </div>
        <div className="row g-0">
            {prod2.map((prod2)=>(
                <div className="col-2 col-lg-2 mt-3">
                    <img src={prod2.img1} style={{width:"100%"}} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Mans
