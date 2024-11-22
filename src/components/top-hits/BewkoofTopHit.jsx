import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './BewkoofTopHit.css'


const BewkoofTopHit = () => {
    const products = [{
        id: "1",
        img: "https://images.bewakoof.com/uploads/grid/app/ProductScroll-boyfriend-tee-2-1727693585.jpg    ",
        title: "product image"
    },
    {
        id: "2",
        img: "https://images.bewakoof.com/uploads/grid/app/ProductScroll-classic-fit-tee-1727693585.jpg ",
        title: "product image"
    },
    {
        id: "3",
        img: "https://images.bewakoof.com/uploads/grid/app/ProductScroll-joggers-1727693584.jpg ",
        title: "product image"
    },
    {
        id: "4",
        img: "https://images.bewakoof.com/uploads/grid/app/ProductScroll-jeans-1727693583.jpg",
        title: "product image"
    },{
        id:"5",
        img:"https://images.bewakoof.com/uploads/grid/app/ProductScroll-shirts-men-1724995924.jpg",
        title:"product_Image"
    }]


    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-lg-12 text-center p-3">
                    <h3 className='bewkoof'>Bewakoof's Top Hits</h3>
                </div>
            </div>
            <div className="row">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    speed={800}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        162: {slidesPerView:1},
                        320: { slidesPerView: 1 }, 
                        640: { slidesPerView: 1 }, 
                        768: { slidesPerView: 3 }, 
                        1024: { slidesPerView: 3 }, 
                    }}

                >
                    {products.map((products) => (

                        <SwiperSlide key={products.id}>
                            <img src={products.img} alt={products.title} className="card-img-top" />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center p-3">
                    <a href="">Explore All</a>
                </div>
            </div>
        </div>
    )
}

export default BewkoofTopHit
