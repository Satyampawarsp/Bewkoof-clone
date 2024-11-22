import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './OctobarFav.css'

const OctobarFav = () => {
    const products = [
        {
            id: 1,
            imageUrl: "https://images.bewakoof.com/t320/women-s-white-purple-camouflage-printed-oversized-plus-size-t-shirt-637448-1727421867-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1299",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 2,
            imageUrl: "https://images.bewakoof.com/t320/women-s-jet-black-snoopy-king-graphic-printed-oversized-t-shirt-634055-1725012068-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1599",
            discount: "499",
            off: "68% OFF",
            dist:"BUY 2 FOR 999"
        },

        {
            id: 3,
            imageUrl: "https://images.bewakoof.com/t320/women-s-orange-glow-up-graphic-printed-oversized-short-top-636774-1728037585-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 999",
            discount: "799",
            off: "60% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 4,
            imageUrl: "https://images.bewakoof.com/t320/women-s-bird-egg-green-partner-in-crime-graphic-printed-oversized-t-shirt-646985-1723646186-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 5,
            imageUrl: "https://images.bewakoof.com/t320/men-s-green-eddie-brock-graphic-printed-oversized-t-shirt-646266-1725012034-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1999",
            discount: "199",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 6,
            imageUrl: "https://images.bewakoof.com/t320/men-s-black-beige-stark-latte-color-block-sneakers-640591-1725605377-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 7,
            imageUrl: "https://images.bewakoof.com/t320/men-s-black-logan-graphic-printed-oversized-t-shirt-648481-1726149790-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 8,
            imageUrl: "https://images.bewakoof.com/t320/women-s-blue-white-get-schwifty-graphic-printed-oversized-t-shirt-636849-1728037550-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1799",
            discount: "399",
            off: "20% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 9,
            imageUrl: "https://images.bewakoof.com/t320/men-s-green-loki-graphic-printed-oversized-acid-wash-t-shirt-648728-1728291319-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 10,
            imageUrl: "https://images.bewakoof.com/t320/men-s-brick-red-main-character-typography-oversized-t-shirt-637365-1726479474-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 11,
            imageUrl: "https://images.bewakoof.com/t320/women-s-blue-white-get-schwifty-graphic-printed-oversized-t-shirt-636849-1728037550-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build.",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1299",
            discount: "599",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 12,
            imageUrl: "https://images.bewakoof.com/t320/men-s-green-loki-graphic-printed-oversized-acid-wash-t-shirt-648728-1728291319-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "300",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 13,
            imageUrl: "https://images.bewakoof.com/t320/men-s-black-beige-stark-latte-color-block-sneakers-640591-1725605377-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 1599",
            discount: "3000",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 15,
            imageUrl: "https://images.bewakoof.com/t320/men-s-brick-red-main-character-typography-oversized-t-shirt-637365-1726479474-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 2000",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 16,
            imageUrl: "https://images.bewakoof.com/t320/women-s-jet-black-snoopy-king-graphic-printed-oversized-t-shirt-634055-1725012068-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },

        {
            id: 17,
            imageUrl: "https://images.bewakoof.com/t320/women-s-orange-glow-up-graphic-printed-oversized-short-top-636774-1728037585-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        ,
        {
            id: 18,
            imageUrl: "https://images.bewakoof.com/t320/women-s-bird-egg-green-partner-in-crime-graphic-printed-oversized-t-shirt-646985-1723646186-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 5000",
            discount: "2000",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 19,
            imageUrl: "https://images.bewakoof.com/t320/men-s-green-eddie-brock-graphic-printed-oversized-t-shirt-646266-1725012034-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 20,
            imageUrl: "https://images.bewakoof.com/t320/women-s-orange-glow-up-graphic-printed-oversized-short-top-636774-1728037585-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build ",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
        {
            id: 21,
            imageUrl: "https://images.bewakoof.com/t320/men-s-black-beige-stark-latte-color-block-sneakers-640591-1725605377-1.jpg",
            title: "Bewakoof®",
            text: "Some quick example text to build .",
            heart: <i class="bi bi-heart"></i>,
            price: "₹ 799",
            discount: "399",
            off: "50% OFF",
            dist:"BUY 2 FOR 999"
        },
    ];

    return (
        <div className="container-fluid new-arrival mt-3">
            <div className="row">
                <div className="col-lg-12 mt-3">
                    <h3 className='text-center branding fs-6'>October favorites on sale</h3>
                </div>
            </div>
            <div className="row p-4">

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    loop={true}
                    speed={3000}
                    navigation={true}

                    breakpoints={{  
                        320: { slidesPerView: 2, spaceBetween: 10 },  
                        640: { slidesPerView: 3, spaceBetween: 20 },  
                        768: { slidesPerView: 4, spaceBetween: 25 },  
                        1024: { slidesPerView: 5, spaceBetween: 30 }, 
                    }}
                    
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="card h-100 ">
                                <img src={product.imageUrl} alt={product.title} className="card-img-top" />
                                <span className='shoping'>{product.dist}</span>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="fs-6">{product.title}</h5>
                                    
                                    <div className="d-flex justify-content-between align-items-center ">
                                    <p className="paragraph ">{product.text}</p>
                                        <span className="heart-icon">{product.heart}</span>
                                    </div>
                                    <h5 className="price text-dark ">
                                        {product.price} <span className="text-muted discount"><del>{product.discount}</del></span>
                                        <span className=" offer ">{product.off}</span>
                                    </h5>
                                </div>
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="row">
                <div className="col-lg-12 explore text-center">
                    <a className='' href="">Explore All</a>
                </div>
            </div>
        </div>
    );
};

export default OctobarFav;
