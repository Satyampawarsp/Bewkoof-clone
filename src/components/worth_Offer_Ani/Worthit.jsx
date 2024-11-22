import React from 'react';
import './Worthit.css'
const Worthit = () => {
    const images = [
        { id: "1", image: "https://images.bewakoof.com/uploads/grid/app/offer8-1727260524.jpg" },
        { id: "2", image: "https://images.bewakoof.com/uploads/grid/app/2gif-1727442036.gif" },
        { id: "3", image: "https://images.bewakoof.com/uploads/grid/app/3gif-1727442036.gif" },
        { id: "4", image: "https://images.bewakoof.com/uploads/grid/app/4gif-1727442037.gif" },
        { id: "5", image: "https://images.bewakoof.com/uploads/grid/app/5gif-1727442062.gif" },
        { id: "6", image: "https://images.bewakoof.com/uploads/grid/app/6gif-1727442062.gif" },
    ];
    const images2 = [
        { id: "1", image: "https://images.bewakoof.com/uploads/grid/app/7gif-1727442063.gif" },
        { id: "2", image: "https://images.bewakoof.com/uploads/grid/app/240x400-shirts-1728022624.jpg" },
        { id: "3", image: "https://images.bewakoof.com/uploads/grid/app/9gif-1727442082.gif" },
        { id: "4", image: "https://images.bewakoof.com/uploads/grid/app/Offer-Grid-480x800.jpg" },
        { id: "5", image: "https://images.bewakoof.com/uploads/grid/app/11gif-1727442083.gif" },
        { id: "6", image: "https://images.bewakoof.com/uploads/grid/app/12gif-1727442084.jpg" },
    ];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-12">
                    <img className='' style={{width:"100%", }} src="https://images.bewakoof.com/uploads/grid/app/Naruto-Sneaker-thin-banner-desktop--1--1728554537.jpg" alt="" />
                    <img style={{width:"100%"}} src="https://images.bewakoof.com/uploads/grid/app/OOFsale-Sept-LandingPage-desktop-stealworthy-header-1727260132.jpg" alt="" />
                </div>
            </div>
            <div className="row worthit-logo g-1">
                {images.map((img) => (
                    <div className="col-2 col-sm-2 col-md-3 col-lg-2" key={img.id}>
                        <img className='img-fluid' src={img.image} alt={`Image ${img.id}`} />
                    </div>
                ))}
            </div>
            <div className="row worthit-logo g-1">
                {images2.map((img) => (
                    <div className="col-2 col-sm-2 col-md-3 col-lg-2" key={img.id}>
                        <img className='img-fluid' src={img.image} alt={`Image ${img.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Worthit;
