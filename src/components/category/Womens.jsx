import React from 'react'

const Womens = () => {
    const products = [{
        id: "1",
        img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-2jpg-1728369227.jpg"
    },
    {
        id: "2",
        img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-2-1728370520.jpg"
    },
    {
        id: "3",
        img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-16-1728369249.jpg"
    },
    {
        id: "4",
        img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Women-8-1724744286.jpg"
    },
    {
        id: "5",
        img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-6-1728369227.jpg"
    },
    {
        id: "6",
        img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-14-1728369249.jpg"
    },]
    const products2 = [
        {
            id: "1",
            img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-20--1--1728369250.jpg"
        },
        {
            id: "2",
            img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-22--1--1728369299.jpg"
        },
        {
            id: "3",
            img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-8-1728369228.jpg"
        },
        {
            id: "4",
            img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-10-1728369229.jpg"
        },
        {
            id: "5",
            img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-24--1--1728369301.jpg"
        },
        {
            id: "6",
            img: "https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-12-1728369248.jpg"
        }
    ]

    return (
        <div className="container-fluid">
            <div className="row">
                <div className=" col-lg-12 p-1">
                    <h4 className='text-center brand'>Shop by Category- Women</h4>
                </div>
            </div>
            <div className="row g-0">
                {products.map((product) => (
                    <div className="col-2 col-lg-2 col-sm-2">
                        <img src={product.img} style={{ width: "100%" }} alt="" />
                    </div>
                ))}
            </div>
            <div className="row g-0">
                {products2.map((products) => (
                    <div className="col-2 col-lg-2 mt-3">
                        <img src={products.img} style={{ width: "100%" }} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Womens
